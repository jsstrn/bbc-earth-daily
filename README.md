# BBC Earth Daily

BBCEarthDailyBot is a Telegram bot that posts a daily video to the [BBCEarthDaily](https://t.me/BBCEarthDaily) channel on Telegram. The videos are sourced from the [BBC Earth YouTube channel](https://www.youtube.com/user/BBCEarth).

It uses AWS Lambda to execute the functions and AWS CloudWatch Events for scheduling the events.

Subscribe to the [channel](https://t.me/BBCEarthDaily) to get your daily dose of BBC Earth.

## Development

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

You can get your AWS user credentials from the IAM management console. Learn more about [configuring the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html).

### List existing lambda functions

```sh
aws lambda list-functions --max-items 10
```

Or simply run the custom npm script

```
npm run list
```

### Retrieve a lambda function

To retrieve information about a specific lambda function

```
aws lambda get-function --function-name bbc-earth-daily
```

Or simply run the custom npm script

```
npm run info
```

### Getting help

You can try getting help directly from AWS CLI

```
aws lambda help
```

You can read more about using [AWS Lambda with AWS CLI](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-awscli.html#with-userapp-walkthrough-custom-events-get-configuration).