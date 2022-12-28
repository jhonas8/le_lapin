import { Builder } from "@sls-next/lambda-at-edge";
import {Build} from "__build/@types"
import { WebStack } from "_web-stack";
import { join } from "path";

const buildAndDeployWebStack = async ({ app, environment, stack_name }: Build.BuildAndDeploytStackDTO) => {

    try {
        const next_path = join(__dirname, '..', '..','..', 'web');
        const out_dir = join(__dirname, "..", "build-nextjs");

        const builder = new Builder(next_path, out_dir, {
            args: ['build'],
            cmd: 'yarn',
            cwd: next_path,
            env: {

            }
        });

        await builder.build(true);

    } catch(err) {
        console.error(err);
    }

    return new WebStack(app, `Web-Stack-${stack_name}`, {
        env: {
            region: 'us-east-1',
            account: process.env.CDK_DEFAULT_ACCOUNT,
        },
        environment,
    });
}

export {
    buildAndDeployWebStack
}
