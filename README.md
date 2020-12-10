# AWS Elastic Beanstalk Node.js Sample App

This repository contains a sample Node.js web application built using [Express](https://expressjs.com/), meant to be used as part of the AWS DevOps Learning Path.

### AWS Continuous Delivery Pipeline Lab
https://docs.google.com/document/d/1i1FmhUQ8PNjynMU_5mJunMPE3XDYRvhw6K76clGXjYo/edit?usp=sharing

The purpose of this lab is to launch a publicly accessible sample web application as well as setting up a continous delivery pipeline for pushing code changes to that application using a process involving Github, Elastic Beanstalk, AWS Codebuild, and AWS CodePipeline. The process for the pipeline works as follows. On a local machine, copies of the files in the Git Repository are updated and then pushed to this Git Repository using Git Commit. Having already set up a AWS Codebuild build project and added to the pipeline, the project has our specific Git Repository as its source provider allowing it to compile the updated web app source code, run tests on the code, and produces ready to deploy build artifacts on our behalf without us having to worry about provisioning or managing infrastructure. The pipeline was then set up to have an intermediate review stage where the developer would then manually approve the deployment of the updated build by clicking a button thereby making this a continous delivery. Having already set up a AWS Elastic Beanstalk application that has the proper configuration and is running the old web app code, the new build with the updated source code will be deployed and the change can now be seen. The purpose of this lab is to facilitate this process wherein we properly configure and launch an Elastic Beanstalk application, our Codebuild build project, and our CodePipeline with the previous services added for each stage along with a review stage. We then test that our CodePipeline is working using updates pushed through Git Commit to see if the process works.

![alt text](https://d1.awsstatic.com/webteam/getting_started/GSRC%202020%20updates/DevOps%20Engineer/Module-5.7671640ce429a5183243197ef3c266bcd3d4aa20.png)

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

