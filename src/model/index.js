const srcLocation = require("../srcLocation");

const express = require(`express`);
const app = express();
require(`dotenv`).config();

app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: false }))

const mainRouter = require("./routes/mainRouter");

const port = process.env.SERVERPORT || 3030;
const protocol = process.env.PROTOCOL || `http`;
const ip = require(`ip`).address();

console.log(Math.random().toString(36).substring(2, 15)); // gerador de passe

app.use("/",mainRouter);

app.listen(port,()=>{
    console.log(`Server running on localhost:${port} or ${protocol}:${ip}:${port}`);
});