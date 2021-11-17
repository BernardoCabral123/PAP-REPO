const express = require(`express`);
const app = express();

const protocol = process.env.PROTOCOL || `http`;
const ip = require(`ip`).address();
const port = process.env.PORT || 3000


app.get('/',(req,res) =>{
    res.send(`teste`);
});

app.listen(port,() =>{
    console.log(`Server running in http:localhost:${port} or ${protocol}:${ip}:${port}`);
});