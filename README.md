# BBC Earth Daily

BBCEarthDailyBot is a Telegram bot that posts a daily video to the [BBCEarthDaily](https://t.me/BBCEarthDaily) channel on Telegram. The videos are sourced from the [BBC Earth YouTube channel](https://www.youtube.com/user/BBCEarth).

It uses AWS Lambda to execute the functions and AWS CloudWatch Events for scheduling the events.

Subscribe to the [channel](https://t.me/BBCEarthDaily) to get your daily dose of BBC Earth.

## Development

Install all dependencies:

```sh
npm install
```

## Tests

Run tests

```sh
npm test
```

Run all tests in watch mode

```sh
npm run test:watch
```

View test coverage report

```sh
npm run test:coverage
```

## Deployment

### Build the app

This bundles all files in the project and creates a zip file

```sh
npm run build
```

Next, we will use AWS CLI to deploy our app.

### Install AWS CLI

```sh
brew install aws-cli
```

### Configure AWS CLI

```sh
aws configure
```

```sh
AWS Access Key ID [None]: YOURKEYHERE
AWS Secret Access Key [None]: YOURSECRETKEYHERE
Default region name [None]: ap-southeast-1
Default output format [None]: json
```

You can get your AWS user credentials from the IAM management console.

Learn more about [configuring the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html).

### List existing lambda functions

```
npm run list
```

### Retrieve a specific lambda function

```
npm run info
```

### Getting help with AWS CLI

```
aws lambda help
```

You can read more about using [AWS Lambda with AWS CLI](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-awscli.html#with-userapp-walkthrough-custom-events-get-configuration).
