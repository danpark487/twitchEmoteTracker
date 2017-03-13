const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const tmi = require('tmi.js');

const app = express();
const server = http.createServer(app);

const io = socketio(server);
app.io = io;

/** Logging Middleware */
app.use(morgan('dev'));

/** Body Parsing Middleware for POST/PUT reqeusts */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/** Static File Middleware */
const rootPath = path.join(__dirname, '..');
const browserPath = path.join(rootPath, 'browser');
const publicPath = path.join(rootPath, 'public');
const imagesPath = path.join(rootPath, 'public/images');

app.use(express.static(rootPath));
app.use(express.static(browserPath));
app.use(express.static(publicPath));
app.use(express.static(imagesPath));

/** Socket IO */

io.on('connection', function (socket) {
    /** Set options for TMI client */
    socket.on('start', function (settings) {  
        const options = {
            options: {
                debug: true
            },
            identity: {
                username: settings.username,
                password: settings.oauth
            },
            channels: [
                settings.channel
            ]
        };
        /** Start bot */
        const client = new tmi.client(options);
        client.on('connectfail', () => {
            console.log('failed to connect to channel');
            io.emit('connecterror');
        });
        /** Emit 'chat' when bot receives a chat */
        client.on('chat', (channel, userstate, chat) => {
            io.emit('chat', chat);
        });
        /** Starts and stops the bot */
        client.connect();
        socket.on('stop', () => client.disconnect());
    });
});

/** Default Error-handling Middleware */
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message);
});

/** Starting Server */

const PORT = process.env.PORT || 4100;
server.listen(PORT, () => {
    console.log('Server now listening on port', PORT);
});

module.exports = app;
