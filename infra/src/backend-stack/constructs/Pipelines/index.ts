import { Construct } from "constructs";
import { Pipelines } from "_backend-stack/constructs/Pipelines/@types";
import { WebDeploymentPipeline } from "./deployments/webdeployment";

interface Props {
    environment: string;
}

export class PipelinesConstruct extends Construct {

    public readonly pipelines: Pipelines;

    constructor(scope: Construct, id: string, props: Props) {
        super(scope, id);
        
        this.pipelines = {
            web_deployment_pipeline: new WebDeploymentPipeline(scope, `Web-Deployment-Pipeline-${props.environment}`, {
                environment: props.environment,
            }),
        }
    }
}
