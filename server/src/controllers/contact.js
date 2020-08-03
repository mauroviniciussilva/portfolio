require('dotenv').config();
const express = require('express');
const router = express.Router();
const { sendEmail } = require('../services/mailer');
const { getMessage } = require('../helpers/messages.js');

const DEFAULT_LANGUAGE = process.env.DEFAULT_LANGUAGE;

router.post('/', async (req, res) => {
    const language = req.headers['accept-language'] || 'en';
    
    try {
        const { body } = req;

        const text = `
            ${getMessage(DEFAULT_LANGUAGE, 'email.contact.title')}
            ${getMessage(DEFAULT_LANGUAGE, 'email.contact.name')}: ${body.name};
            ${getMessage(DEFAULT_LANGUAGE, 'email.contact.phone')}: ${body.phone};
            ${getMessage(DEFAULT_LANGUAGE, 'email.contact.email')}: ${body.email};
            ${getMessage(DEFAULT_LANGUAGE, 'email.contact.subject')}: ${body.subject};
            ${getMessage(DEFAULT_LANGUAGE, 'email.contact.message')}: ${body.message};
        `;

        const html = `
            <div style="text-align:center">
                <h2>${getMessage(DEFAULT_LANGUAGE, 'email.contact.title')}</h2>
            </div>
            <hr/>
            <p><strong>${getMessage(DEFAULT_LANGUAGE, 'email.contact.name')}</strong>: ${body.name}</p>
            <p><strong>${getMessage(DEFAULT_LANGUAGE, 'email.contact.phone')}</strong>: ${body.phone}</p>
            <p><strong>${getMessage(DEFAULT_LANGUAGE, 'email.contact.email')}</strong>: ${body.email}</p>
            <hr/>
            <h3>${getMessage(DEFAULT_LANGUAGE, 'email.contact.subject')}: ${body.subject}</h3>
            <h3>${getMessage(DEFAULT_LANGUAGE, 'email.contact.message')}: ${body.message}</h3>
        `;

        let result;
        const subject = getMessage(DEFAULT_LANGUAGE, 'email.contact.subjectText');
        
        await sendEmail(subject, text, html)
            .then(() => {
                result = { status: getMessage(language, 'response.emailSent') };
            })
            .catch(error => {
                throw { error };
            });

        return res.jsonOK({}, 'response.messageSent', result, language);
    } catch (error) {
        res.jsonBadRequest({}, 'response.emailNotSent', error, language);
    }
});

module.exports = router;