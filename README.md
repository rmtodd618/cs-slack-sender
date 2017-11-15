This was created to have cs-gdax-lambda-scan send messages built up.

var sns = new AWS.SNS();
               var parm = {
                   Message: () ,
                   Subject: slack,
                   TopicArn: process.env.TOPIC_ARN
               };
               sns.publish(parm, data);
           console.log("Message Sending to:  ", userId);