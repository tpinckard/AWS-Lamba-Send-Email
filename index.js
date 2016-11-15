'use strict';
console.log('Loading function');

var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
// Note, for gmail accounts you probably want to create an app specific password: https://nodemailer.com/using-gmail/
var transporter = nodemailer.createTransport('smtps://USER%40gmail.com:PASSWORD@smtp.gmail.com');
// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Display Name" <FROM@domain.com>', // sender address
    to: 'DESTINATION@domain.com', // list of receivers
    subject: 'This is a test email', // Subject line
    text: 'Plaintext email content', // plaintext body
    html: '<b><h1>HTML Email Content</h1></b>' // html body
};
exports.handler = (event, context, callback) => {
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });
};
