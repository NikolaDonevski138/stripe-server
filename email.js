const nodemailer = require('nodemailer');


const sendMail = (to) => {

  var transporter = nodemailer.createTransport({
    service: 'yahoo',
    auth: {
      user: 'n.donevski@yahoo.com',
      pass: 'nfmc gaco vwhr dnuv'
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