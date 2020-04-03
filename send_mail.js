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
  host: "94.237.61.10",
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
  to: "Mehdi   test-q3j3oy5pz@mail-tester.com",
  subject: "test",
  text: "test",
  html: "<h2>test</h2>"
}

transporter
  .sendMail(data)
  .then(res => {
    console.log(`✔ test email sent to ${res.accepted.toString()}`)
  })
  .catch(err => console.error(`test email fail `, err))




module.exports = transporter 