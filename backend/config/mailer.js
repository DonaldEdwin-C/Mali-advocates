import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",   
  port: 587,                
  secure: false,           
  auth: {
    user: "your_email@gmail.com",
    pass: "your_app_password"
  }
});

export default transporter;
