import * as cdk from "aws-cdk-lib";
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";

export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CodePipeline(this, "TestPipeline", {
      pipelineName: "TestPipeline",
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.gitHub("enesbek/cdk-cicd", "dev"),
        commands: [
          "echo 'Current directory before cd'",
          "pwd",
          "echo 'Listing contents before cd'",
          "ls -la",
          "cd cdk-cicd",
          "echo 'Changed directory to cdk-cicd'",
          "pwd",
          "npm ci",
          "npx cdk synth",
        ],
        primaryOutputDirectory: "cdk-cicd/cdk.out",
      }),
    });
  }
}
