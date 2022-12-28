import { Construct } from "constructs";
import { Roles } from "_backend-stack/constructs/Pipelines/@types";
import { Effect, PolicyStatement, Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";

interface Props {
    environment: string;
}

export class PipelineRolesConstruct extends Construct {
    public readonly roles: Roles

    constructor(scope: Construct, id: string, props: Props) {
        super(scope, id);

        this.roles = {
            web_deployment_pipeline_role: new Role(scope, `Web-Deploy-Pipeline-Role`, {
                assumedBy: new ServicePrincipal('codepieline.amazonaws.com'),
                roleName: `web-deploy-pipeline-role-${props.environment.toLowerCase()}`,
                description: 'Role for the pipeline to deploy the front-end',
            }),
        }

        this.roles.web_deployment_pipeline_role.addToPrincipalPolicy(
            new PolicyStatement({
                effect: Effect.ALLOW,
                actions: ['codebuild:*', 'codepipeline:*', 'cloudformation:*', 'sts:*'],
                resources: ['*']
            })
        );
    }   
}
