
import nodemailer from 'nodemailer'
// host: "smtp.gmail.com",
//  port: 465, 
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});


export default transporter
