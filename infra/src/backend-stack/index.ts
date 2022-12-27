import { Stack, StackProps} from "aws-cdk-lib";
import { Construct } from "constructs";
import { PipelinesConstruct } from "_backend-stack/constructs/Pipelines";

interface Props extends StackProps {
    environment: string;
}

export class BackendStack extends Stack {
    public readonly pipelines_construct: PipelinesConstruct;

    constructor(scope: Construct, id: string, props: Props) {
        super(scope, id);

        this.pipelines_construct = new PipelinesConstruct(this, `Pipelines-Construct-${props.environment}`, {
            environment: props.environment
        });
    }    
}
