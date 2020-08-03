require('dotenv').config();
const nodemailer = require("nodemailer");

const HOST_EMAIL = process.env.HOST_EMAIL;
const USER_EMAIL = process.env.USER_EMAIL;
const PASS_EMAIL = process.env.PASS_EMAIL;
const PORT_EMAIL = process.env.PORT_EMAIL;
const SEND_TO = process.env.SEND_TO;

let transporter = nodemailer.createTransport({
    host: HOST_EMAIL,
    secureConnection: false,
    port: PORT_EMAIL,
    auth: {
        user: USER_EMAIL,
        pass: PASS_EMAIL
    },
    tls: {
        ciphers: 'SSLv3'
    }
});

const sendEmail = (subject, text, html) => {
    return transporter.sendMail({
        from: `Mauro Oliveira <${USER_EMAIL}>`,
        to: SEND_TO,
        subject: subject,
        text: text,
        html: html
    });
}

module.exports = { sendEmail };