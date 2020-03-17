const nodemailer = require("nodemailer")
const { emailUsername, emailPassword } = require("./config")

// const transport = {
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: emailUsername,
//     pass: emailPassword
//   }
// }

const transport = { 
  host: "94.237.56.167",
  port: 25,
  tls: false,
  secure: false,
  ignoreTLS : true


}


const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => { 

  if (error) {
    console.log(error)
  } else {
    console.log("Nodemailer is ready")
  }
})

// test email
const data = {
  from: "Sky-tours.com <support@sky-tours.com>",
  to: "Mehdi test-82ask6hpl@mail-tester.com",
  subject: "test",
  text: "test",
  html: "<h2>test</h2>"
}

transporter
  .sendMail(data)
  .then(res => {
    console.log(`✔ confirmation email sent to ${res.accepted.toString()}`)
  })
  .catch(err => console.error(`cannot update emailSent to true for order `, err))




module.exports = transporter