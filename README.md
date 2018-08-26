# About
This is an SPA used for www.grantredfearn.com. It was initially created using Create React App. More info on Create React App can be found in the `README-CRA.md` file. This document is meant to keep notes on how the application was further configured and setup. 

# Configuring FrontEnd
- create a `config.js` file and copy/paste `config.sample.js`. Replace the values.
- run:
  ```sh
  $ yarn install
  $ yarn start
  ```
  this should forward you to `localhost:3000` and will reload development code changes on save.

# Deploying:
This SPA is meant to be hosted on an S3 bucket. The S3 bucket should have Static Website Hosting enabled. You will need your AWS account configured. Run `$ aws configure` and enter your AccessKeyID and your SecretAccessKey. You may enter in a default region, or choose to leave that blank. To update the S3 bucket:
- Run:
  ```sh
  $ yarn build
  ```
  This will build a `build/` folder in the root directory of the repo. 
- Run:
  ```sh
  $ aws s3 sync build/ s3://YOUR_S3_DEPLOY_BUCKET_NAME
  ```
  This will sync the `build/` directory with your s3 bucket contents. If it is not your first time to deploy to this bucket, you can include the `--delete` flag at the end of the command to delete the old source maps and deprecated files. 
  Note: if this is hosted to CloudFront Distributions, you must now invalidate your cache. When setting up a CloudFront distribution, you should have one for your www domain, and one for an s3 redirect bucket from non-www. 
  ```sh
  $ aws cloudfront create-invalidation --distribution-id YOUR_CF_DISTRIBUTION_ID --paths "/*"
  $ aws cloudfront create-invalidation --distribution-id YOUR_WWW_CF_DISTRIBUTION_ID --paths "/*"
  ```
  Note: You can also use the "yarn deploy-prod" script, but you must first replace the YOUR_CF_DISTRIBUTION_ID & YOUR_WWW_CF_DISTRIBUTION_ID values. **DO NOT UPLOAD DISTRIBUTION IDs**