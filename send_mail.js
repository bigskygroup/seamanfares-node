const nodemailer = require("nodemailer")
const { emailUsername, emailPassword } = require("./config")

const transport = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: emailUsername,
    pass: emailPassword
  }
}

// const transport = {
//  host: "94.237.56.167",
//   port: 25,
//   secure: false,

// }


const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => { 

  if (error) {
    console.log(error)
  } else {
    console.log("Nodemailer is ready")
  }
})

//  transporter.sendMail(
// {
//     from: emailUsername,
//     to: "alialipoor1985@yahoo.com",
//     cc: "",
//     bcc: "",
//     subject: "testing nodemailer",
//     text: "testing nodemailer",
//     html: "<h1>testing nodemailer</h1>"
//   }

//   ).then(res=> console.log("this is res", res))
//  .catch(err=>console.log("this is err", err) )

// console.log(transporter)

// SEND EMAIL
// router.route("/sendemail").post(function(req, res, next) {
//   var nameFrom = req.body.nameFrom
//   var emailTo = req.body.emailTo
//   var emailCc = req.body.emailCc
//   var emailBcc = req.body.emailBcc
//   var subject = req.body.emailSubject
//   var messageTxt = req.body.emailMessageTxt
//   var messageHtml = req.body.emailMessageHtml
//   var confirmId = req.body.emailConfirmId

//   // var mail = {
//   //   from: nameFrom,
//   //   to: emailTo,
//   //   cc: emailCc,
//   //   bcc: emailBcc,
//   //   subject: subject,
//   //   text: messageTxt,
//   //   html: messageHtml
//   // }

//   // transporter.sendMail(mail, (err, data) => {
//   //   if (err == null) {
//   //     //first booking confirmation email
//   //       res.json({
//   //         msg: 'success'
//   //       })
//   //       return console.log('Email was sent')
//   //   } else {
//   //     res.json({
//   //       msg: 'error'
//   //     })
//   //     return console.log('Email send failed');
//   //   }
// })

module.exports = transporter