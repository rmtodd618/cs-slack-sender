This was created to have cs-gdax-lambda-scan send messages built up.

var sns = new AWS.SNS();
               var parm = {
                   Message: () ,
                   Subject: slack,
                   TopicArn: process.env.TOPIC_ARN
               };
               sns.publish(parm, data);
           console.log("Message Sending to:  ", userId);
           
           
aws-lambda-send-to-slack

Email alerts are ignored, SMS alerts are weirdly intrusive, face-to-face alerts require eye contact. Since all of the cool kids are on Slack now, let's send our alerts to their Slack channels! This lambda function takes messages from an AWS SNS queue and forwards them to the channels of your choice.

Setup

Set up an incoming webhook on your Slack team. Note the webhook url.
Create an SNS topic on AWS.
Create a new Lambda on AWS. Select "Node.js" as the runtime with a basic execution role. Copy the code from lambda.js, replacing "YOUR_SLACK_PATH_HERE" with your webhook url.
Add your new SNS topic as an event source.
Usage

To post to a channel, publish an SNS message with the subject being the channel name (with the # and everything) (or user (with @)) and the message being the contents of the post.
