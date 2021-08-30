const nodemailer = require('nodemailer');
//const mailgun = require('nodemailer-mailgun-transport');
const Mailgun = require('mailgun-js')
const dotenv = require('dotenv')
dotenv.config({ path:'./config.env'});

const apiKey = process.env.API_KEY;
const domain = process.env.DOMAIN;

const mailgun = new Mailgun({apiKey: apiKey, domain: domain});

// const auth = {
//     auth:{
//         api_key: process.env.API_KEY,
//         domain: process.env.DOMAIN
//     }
// }
// const transporter = nodemailer.createTransport(mailgun(auth));

exports.sendEmail = (req, res) => {
    let status = false
    const{name, contact, location} = req.body;
    const mailOptions = {
        from: 'vikrantgupta.psit@gmail.com',
        to: 'vikrantgupta.psit@gmail.com',
        subject:`Mail from your portfolio by ${name}`,
        text: `contact: ${contact}, location: ${location}.`
    }
    
    try{
        mailgun.messages().send(mailOptions, function(err, res) {
            if(err) {return console.log(err)}else{status = true}  
        })
        res.status(200).json({
            status: 'success',
            message: 'email received successfully'
        })
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}


exports.sendMessage = (req, res) => {
    let status = false
    const{firstName,  lastName, contact, email, message} = req.body;
    const mailOptions = {
        from: 'vikrantgupta.psit@gmail.com',
        to: 'vikrantgupta.psit@gmail.com',
        subject:`Message from ${email}`,
        text: `name: ${firstName + ' ' + lastName},contact: ${contact}, message: ${message}.`
    }
    
    try{
        mailgun.messages().send(mailOptions, function(err, res) {
            if(err) {return console.log(err)}else{status = true}  
        })
        res.status(200).json({
            status: 'success',
            message: 'email received successfully'
        })
    }catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}
