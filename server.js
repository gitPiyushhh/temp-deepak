const express = require('express')
const path = require('path');
const http = require('http')
const app = express();
const server = http.createServer(app);
const dotenv = require('dotenv')
const mailer = require('./controller/mailer')

dotenv.config({ path: './config.env' });
//setting up serveer -- chunk 1
app.use(express.static(path.join(__dirname, 'view')));

const PORT = process.env.PORT || 8080;

//parsing data -- chunk 2\
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));

app.post('/email', mailer.sendEmail);
app.post('/detailed/email', mailer.sendMessage);

//setting up routes -- chunk 1
app.get('/', (req, res) =>{
    res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'))
})

server.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})