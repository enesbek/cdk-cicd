#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { CdkCicdStack } from "../lib/cdk-cicd-stack";

const app = new cdk.App();
new CdkCicdStack(app, "CdkCicdStack", {
  env: {
    account: "975050224235",
    region: "eu-central-1",
  },
});
