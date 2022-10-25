const nodemailer = require('nodemailer');
require("dotenv").config()


const sendMail = (to) => {

  var transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASSWORD
    }
  });

  var mailOptions = {
    from: 'n.donevski@yahoo.com',
    to: to,
    subject: 'Star Wars Fan Page',
    text: 'You Bought Our Products successfuly !'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});
}

module.exports = sendMail;