import * as cdk from "aws-cdk-lib";
import {
  CodePipeline,
  CodePipelineSource,
  ShellStep,
} from "aws-cdk-lib/pipelines";
import { Construct } from "constructs";
import { PipelineStage } from "./PipelineStage";

export class CdkCicdStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, "TestPipeline", {
      pipelineName: "TestPipeline",
      synth: new ShellStep("Synth", {
        input: CodePipelineSource.gitHub("enesbek/cdk-cicd", "dev"),
        commands: [
          "echo 'Current directory before cd'",
          "pwd",
          "echo 'Listing contents before cd'",
          "ls -la",
          "pwd",
          "npm ci",
          "npx cdk synth",
        ],
        primaryOutputDirectory: "./cdk.out",
      }),
    });

    const testStage = pipeline.addStage(
      new PipelineStage(this, "PipelineTestStage", {
        stageName: "test",
      })
    );
  }
}
