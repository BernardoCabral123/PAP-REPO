const express = require(`express`);
const app = express();
require('dotenv').config({path: __dirname + '/.env'});

const protocol = process.env.PROTOCOL || `http`;
const ip = require(`ip`).address();
const port = process.env.PORT || 3000

var routes = require('./routes');



app.listen(port,() =>{
    console.log(`Server running in http:localhost:${port} or ${protocol}:${ip}:${port}`);
});