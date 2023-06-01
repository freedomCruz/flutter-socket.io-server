const path = require('path');
require('dotenv').config();

//App de Express
const express = require('express');
const app = express();

// node server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);

//Llamar sockets.js
require('./sockets/sockets');

const publicPath = path.resolve( __dirname, 'public');
app.use( express.static( publicPath ));

server.listen( process.env.PORT, (err)  => {
   
    if (err) throw Error(err);

    console.log('Servidor corriendo en puerto..', process.env.PORT )

});