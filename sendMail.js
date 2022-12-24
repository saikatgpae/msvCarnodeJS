var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'saikatgpae@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'saikatgpae@gmail.com',
  to: 'saikatgpae@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


// user:'saikatgpae@gmail.com',
//         pass:'Indra1911@#'