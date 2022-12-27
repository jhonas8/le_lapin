import { Artifacts } from "_backend-stack/constructs/Pipelines/@types";
import { Artifact } from "aws-cdk-lib/aws-codepipeline";
import { Construct } from "constructs";

interface Props {
    environment: string;
}

export class PipelineArtifactsConstruct extends Construct {

    public readonly artifacts: Artifacts;

    constructor(scope: Construct, id: string, props: Props) {
        super(scope, id);

        this.artifacts = {
            web_deployment_artifact: new Artifact();
        }
    }
}
