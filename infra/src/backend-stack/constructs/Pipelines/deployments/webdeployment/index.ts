import { Construct } from "constructs";
import { Pipeline } from "aws-cdk-lib/aws-codepipeline";
import { PipelineArtifactsConstruct } from "../../Artifacts";
import { BuildSpec, LinuxBuildImage, PipelineProject } from "aws-cdk-lib/aws-codebuild";
import { PipelineRolesConstruct } from "../../Roles";
import { PipelineWebActions } from "../../Actions";

interface Props {
    environment: string;
}

export class WebDeploymentPipeline extends Construct {

    public readonly pipeline: Pipeline;
    
    public readonly project: PipelineProject;
    
    public readonly artifacts_construct: PipelineArtifactsConstruct;

    public readonly actions_construct: PipelineWebActions;

    public readonly roles_construct: PipelineRolesConstruct;

    constructor(scope: Construct, id: string, props: Props) {
        super(scope, id);

        this.artifacts_construct = new PipelineArtifactsConstruct(scope, `Artifacts-Construct-Web-Pipeline-${props.environment}`, {
            environment: props.environment
        });

        this.roles_construct = new PipelineRolesConstruct(scope, `Web-Pipeline-Roles-Construct-${props.environment}`, {
            environment: props.environment,
        });

        this.pipeline = new Pipeline(scope, `Web-Deployment-Pipeline-${props.environment}`, {
            pipelineName: `Web-Deployment-Pipeline-${props.environment}`.toLowerCase(),
            role: this.roles_construct.roles.web_deployment_pipeline_role,
        });

        this.project = new PipelineProject(scope, `Web-Deployment-Pipeline-Project`, {
            projectName: `FrontendDeployment-${props.environment}`,
            environment: {
                buildImage: LinuxBuildImage.STANDARD_5_0,
                privileged: true,
            },
            buildSpec: BuildSpec.fromObject({
                version: '0.2',
                artifacts: {
                    'enable-symlinks': true,
                },
                phases: {
                    install: {
                        'runtime-versions': {
                            nodejs: '14'
                        },
                        commands: [
                            'npm i --location=global yarn',
                            'yarn',
                        ],
                    },
                    pre_build: {
                        'on-failure': 'ABORT',
                        commands: [
                            'yarn deploy'
                        ]
                    }
                },
            }),
        });

        this.actions_construct = new PipelineWebActions(scope, `Pipeline-Action-Construct-${props.environment}`, {
            environment: props.environment,
            artifacts_construct: this.artifacts_construct,
            pipeline_project: this.project,
        });

        this.pipeline.addStage({
            stageName: 'Source',
            actions: [this.actions_construct.actions.github_source],
        });

        this.pipeline.addStage({
            stageName: 'Deployment',
            actions: [this.actions_construct.actions.deployment],
        });
    }
}
