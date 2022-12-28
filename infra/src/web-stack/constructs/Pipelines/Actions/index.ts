import { Construct } from "constructs";
import { Actions } from "_backend-stack/constructs/Pipelines/@types";
import { CodeBuildAction, GitHubSourceAction } from "aws-cdk-lib/aws-codepipeline-actions";
import { SecretValue } from "aws-cdk-lib";
import { PipelineArtifactsConstruct } from "../Artifacts";
import { PipelineProject } from "aws-cdk-lib/aws-codebuild";

interface Props {
    environment: string;
    artifacts_construct: PipelineArtifactsConstruct;
    pipeline_project: PipelineProject;
}

export class PipelineWebActions extends Construct {

    public readonly actions: Actions;

    constructor(scope: Construct, id: string, props: Props) {
        super(scope, id);

        this.actions = {
            github_source: new GitHubSourceAction({
                actionName: 'Github_Source',
                owner: 'jhonas8',
                repo: 'le_lapin',
                output: props.artifacts_construct.artifacts.web_deployment_artifact,
                oauthToken: SecretValue.secretsManager('le-slapin').toJSON()['github-token'],
                branch: 'main',
            }),
            deployment: new CodeBuildAction({
                actionName: 'deployment',
                project: props.pipeline_project,
                input: props.artifacts_construct.artifacts.web_deployment_artifact,
            }),
        }
    }
}
