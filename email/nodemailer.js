var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'luisfiabani@gmail.com',
    pass: 'azhwujudbmjkwgdb'
  }
});

var mailOptions = {
  from: 'luisfiabani@gmail.com',
  to: 'tainafiabani@gmail.com',
  subject: 'SYSTEMPSI - EMAIL AUTOMÁTICO',
  text: 'Este email foi gerado automaticamente pelo SystemPsi com finalidade de testar a funcionalidade de disparo automático de email. <br><br> Favor não responder este email.'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 