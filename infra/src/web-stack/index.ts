import { NextJSLambdaEdge } from '@sls-next/cdk-construct';
import { Stack, StackProps, aws_cloudfront, Duration } from 'aws-cdk-lib';
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { Construct } from 'constructs';
import path from 'path';

interface Props extends StackProps {
  environment: string;
}

export class WebStack extends Stack {
  public readonly cache_policy: aws_cloudfront.CachePolicy;
  public readonly origin_request_policy: aws_cloudfront.OriginRequestPolicy;
  public readonly next_lambda_edge: NextJSLambdaEdge;

  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);
    
    const out_dir = path.join(__dirname, '..', '..', 'build', 'build-nextjs');

    this.origin_request_policy = new aws_cloudfront.OriginRequestPolicy(
      this,
      `OriginRequestPolicy-${props.environment}`,
      {
        originRequestPolicyName: `OriginRequestPolicyWeb-${props.environment.toLowerCase()}`,
        comment: "Policy",
        cookieBehavior: aws_cloudfront.OriginRequestCookieBehavior.all(),
        queryStringBehavior: aws_cloudfront.OriginRequestQueryStringBehavior.all(),
        headerBehavior: aws_cloudfront.OriginRequestHeaderBehavior.allowList(
          'Origin',
          'Access-Control-Request-Method',
          'Access-Control-Request-Headers',
          'CloudFront-Viewer-Country',
          'CloudFront-Viewer-City',
          'CloudFront-Viewer-Latitude',
          'CloudFront-Viewer-Longitude',
          'CloudFront-Is-IOS-Viewer',
          'CloudFront-Is-Android-Viewer',
        )
      }
    );

    this.cache_policy = new aws_cloudfront.CachePolicy(
      this,
      `CachePolicy-${props.environment}`,
      {
        cachePolicyName: `CachePolicyWeb-${props.environment}`,
        comment: 'Policy',
        headerBehavior: aws_cloudfront.CacheHeaderBehavior.allowList(
          'Origin',
          'Access-Control-Request-Method',
          'Access-Control-Request-Headers',
          'CloudFront-Viewer-Country',
          'CloudFront-Viewer-City',
          'CloudFront-Viewer-Latitude',
          'CloudFront-Viewer-Longitude',
          'CloudFront-Is-IOS-Viewer',
          'CloudFront-Is-Android-Viewer',
        ),
        defaultTtl: Duration.seconds(0),
        minTtl: Duration.seconds(0),
        maxTtl: Duration.days(1),
        enableAcceptEncodingBrotli: true,
        enableAcceptEncodingGzip: true,
      }
    );

    this.next_lambda_edge = new NextJSLambdaEdge(
      this, 
      `LeLapin-Web-${props.environment}`, {
        runtime: Runtime.NODEJS_18_X,
        memory: 1024,
        timeout: Duration.seconds(30),
        serverlessBuildOutDir: out_dir,
        defaultBehavior: {
          originRequestPolicy: this.origin_request_policy,
        },
        cachePolicyName: {
          imageCache: `NextJs-ImageCache-${props.environment}`,
          lambdaCache: `NextJs-LambdaCache-${props.environment}`,
          staticsCache: `NextJs-StaticCache-${props.environment}`
        },
    })
  }
}
