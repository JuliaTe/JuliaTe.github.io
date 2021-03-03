var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// POST route from contact form
app.post('/', (req, res) => {

    // Instantiate the SMTP server
    const smtpTrans = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    })
  
    // Specify what the email will look like
    const mailOpts = {
      from: 'Your sender info here', // This is ignored by Gmail
      to: process.env.GMAIL_USER,
      subject: 'New message from contact form at juliathea.com',
      text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    }
  
    // Attempt to send the email
    smtpTrans.sendMail(mailOpts, (error, response) => {
      if (error) {
        res.send(error) // Show a page indicating failure
      }
      else {
        res.send('Success') // Show a page indicating success
      }
    })
  })

app.listen(process.env.PORT || 8000, function () {
    console.log('Server is up on port 8000');
});