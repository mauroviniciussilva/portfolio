const messagesEn = require('../translate/en/messages.json');
const messagesPt = require('../translate/pt/messages.json');

const getMessage = (language, path) => {
    if (language === 'pt') {
        return messagesPt[path] || null;
    } else {
        return messagesEn[path] || null;
    }
};

module.exports = { getMessage };