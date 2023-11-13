import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as amplify from "@aws-cdk/aws-amplify-alpha";
import * as secretsmanager from "aws-cdk-lib/aws-secretsmanager";
import * as codebuild from "aws-cdk-lib/aws-codebuild";

export class AmplifyCdkStack extends cdk.Stack {
  private config = {
    organizationName: "stabilityprotocol", //Name of the organization on github
    repositoryName: "stability-docs", //Name of the repository that you want deploy
    productionBranch: "main",
  };

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const app = new amplify.App(this, "StabilityDocs", {
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: this.config.organizationName,
        repository: this.config.repositoryName,
        oauthToken: secretsmanager.Secret.fromSecretNameV2(
          this,
          "github-secret",
          "github/amplify-access-token"
        ).secretValue,
      }),
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: "1.0",
        frontend: {
          phases: {
            preBuild: {
              commands: ["yarn"],
            },
            build: {
              commands: ["yarn build"], //Command to build the proyect
            },
          },
          artifacts: {
            baseDirectory: "build", // Directory where build artifacts are saved
            files: ["**/*"],
          },
        },
      }),
    });

    const main = app.addBranch("branch", {
      branchName: this.config.productionBranch,
      stage: "PRODUCTION",
    });

    const domain = app.addDomain("docs.stble.io", {
      enableAutoSubdomain: true,
      autoSubdomainCreationPatterns: ["*", "pr*"],
    });

    domain.mapRoot(main);
  }
}
