# AWS-Lamba-Send-Email
AWS Lamba Function to send an email using Nodemailer.js
(Avoids the "verified email" issue with AWS SES)

To use in lambda:

1. Clone this repo <br>
2. Update index.js to use your mail info <br>
  * update createTransport line to point to your STMP server  <br>
  * update mailOptions to show the email contents that you'd like (to, from, body, etc) <br>
3. from inside the directory: `zip -r ../Mailer.zip *`<br>
4. When asked to provide code for your Lambda function, select "Upload a .ZIP file" <br>
