var url = require('url');
var https = require('https');
var util = require('util');



exports.handler = (event, context, callback) => {
    var POST_OPTIONS = {
        hostname: 'hooks.slack.com',
        path: event.Records[0].Sns.Subject,
        method: 'POST',
    };
    const message = {
        text: event.Records[0].Sns.Message
    };
    console.log('From SNS:', message);
    var r = https.request(POST_OPTIONS, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (data) {
            context.succeed("Message Sent: " + data);
        });
    }).on("error", function(e) {context.fail("Failed: " + e);} );
    r.write(util.format("%j", message));
    r.end();
};