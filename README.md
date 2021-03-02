# Express-Portfolio
**Express-Portfolio** serves my [portfolio](https://juliathea.com) website. It includes a project gallery, a short bio, a downloadable resume, and an email contact form.

## Install

npm install

## Contact form setup

Currently, app.js is set up to use Gmail to send mail using [Nodemailer](https://nodemailer.com/about/). To create your own instance of this app, you would need to add your Gmail account and [an application-specific password](https://support.google.com/accounts/answer/185833?hl=en) to the environment:

export GMAIL_USER=youremailaddress@gmail.com
export GMAIL_PASS=YourGoogleAppSpecificPassword

Read more about [using Gmail with Nodemailer](https://nodemailer.com/usage/using-gmail/) on the offical site.

You can alternatively place the GMAIL_USER and GMAIL_PASS variables in a .env file, as detailed below.
