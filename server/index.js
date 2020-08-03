const express = require('express');
const serveStatic = require('serve-static');
const cors = require('cors');
const response = require('./src/middlewares/response');

const contactController = require('./src/controllers/contact');

const app = express();

app.use(cors());
app.use(response);

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/api/contact', contactController);

if (process.env.NODE_ENV === 'production') {
    app.use(serveStatic(__dirname + '/public'));
    app.use('/robots.txt', serveStatic(__dirname + '/public/robots.txt'));

    app.get('/', (req, res) => res.sendFile(__dirname + '/public/en/index.html'));
    app.get('/en', (req, res) => res.sendFile(__dirname + '/public/en/index.html'));
    app.get('/pt', (req, res) => res.sendFile(__dirname + '/public/pt/index.html'));
    app.get('/en/skills', (req, res) => res.sendFile(__dirname + '/public/en/skills/index.html'));
    app.get('/en/works', (req, res) => res.sendFile(__dirname + '/public/en/works/index.html'));
    app.get('/pt/skills', (req, res) => res.sendFile(__dirname + '/public/pt/skills/index.html'));
    app.get('/pt/works', (req, res) => res.sendFile(__dirname + '/public/pt/works/index.html'));
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

    const port = process.env.PORT || 80;
    const hostname = '0.0.0.0';

    app.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
} else {
    app.listen(5000, () => {
        console.log(`Listening on port ${5000}`);
    });
}