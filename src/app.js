var express = require('express');
var ejs = require('ejs');
var nodemailer = require('nodemailer');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
require('dotenv').config();
var session = require('express-session');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser')

// Setup handlebars engine and views location
app.engine('ejs', require('ejs').__express);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

// Setup public directory to serve
app.use(express.static('./public'));

//middlewares
app.use(cookieParser())
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/',function (req, res) {
  res.render('pages/index.ejs')
});


//routes
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '../index.html'));
// });

app.get('/flash', function(req, res){
    // Set a flash message by passing the key, followed by the value, to req.flash().



    try {
      console.log('Yo1')
      req.flash('info', 'Flash is back!')
      console.log('Yo2')
    } catch (error) {
      console.error(error);
      // expected output: ReferenceError: nonExistentFunction is not defined
      // Note - error messages will vary depending on browser
    }
    // res.redirect('/');
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
        req.flash("message","something went wrong please try again later.")
        res.send(error) // Show a page indicating failure

      }
      else {
        req.flash("message","successfully send email to Jules.")
        console.log("Test")
        // res.send('Success') // Show a page indicating success
    // res.sendFile(path.join(__dirname, '../index.html'));
    res.render("/Users/intergalacticstardust/Projects/JuliaThea_v2/index.htmlindex",function(err,html){
      console.log(err);
      console.log(html);
    })
    console.log("Testa2")
        // req.flash('info', 'Flash is back!');
      }
    })
  })

app.listen(process.env.PORT || 8000, function () {
    console.log('Server is up on port 8000');
});