var nodemailer = require('nodemailer');


function sendReminder(myemail, mypass, reciver, subject, emailbody){
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: myemail,
        pass: mypass
      }
    });

    var mailOptions = {
      from: myemail,
      to: reciver,
      subject: subject,
      text: emailbody
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}
