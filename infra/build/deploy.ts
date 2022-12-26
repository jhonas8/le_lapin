#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import 'source-map-support/register';
import { buildAndDeployWebStack } from './stacks/buildAndDeploytWeb';

const ENVIRONMENT = process.env.ENVIRONMENT || 'dev';

const stack_names = (env: string) => ({
    web: `web-stack-${env.toLowerCase()}`
})

const app = new App();

buildAndDeployWebStack({app, environment: ENVIRONMENT, stack_name: stack_names(ENVIRONMENT).web});

