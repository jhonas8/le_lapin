#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import 'source-map-support/register';
import { buildAndDeployWebStack } from '__build/stacks/buildAndDeployWeb';

const ENV = process.env.ENVIRONMENT || 'dev';

const env = ENV === 'dev' || ENV === 'prod' ? ENV : 'dev';

const stack_names = (env: string) => ({
    web: `web-stack-${env.toLowerCase()}`,
});

const app = new App();

buildAndDeployWebStack({app, environment: env, stack_name: stack_names(env).web});
   