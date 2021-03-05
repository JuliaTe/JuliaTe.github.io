# Express-Portfolio
Travis CI build of master branch: [![Travis CI build of master branch](https://travis-ci.com/julia-thea/julia-thea.github.io.svg?branch=master)](https://travis-ci.com/github/julia-thea/julia-thea.github.io)

**Express-Portfolio** serves my [portfolio](https://juliathea.com) website. It includes a project gallery, a short bio, a downloadable resume, and an email contact form.

## Install

```npm install```

## Contact form setup

Currently, app.js is set up to use Gmail to send mail using [Nodemailer](https://nodemailer.com/about/). To create your own instance of this app, you would need to add your Gmail account and [an application-specific password](https://support.google.com/accounts/answer/185833?hl=en) to the environment:
```
export GMAIL_USER=youremailaddress@gmail.com 
export GMAIL_PASS=YourGoogleAppSpecificPassword
```

Read more about [using Gmail with Nodemailer](https://nodemailer.com/usage/using-gmail/) on the offical site.

You can alternatively place the GMAIL_USER and GMAIL_PASS variables in a .env file, as detailed below.

## Environment variables using .env

The included .env.example file can be used to create a .env file to hold environment variables in an easily accessible place in the project directory.

## Run

npm start to run on port 8000.

# Dependencies
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv) loads environment variables from the .env file into process.env
- [Nodemailer](https://nodemailer.com/about/) sends email from the contact form

