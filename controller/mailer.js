const nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'deepakguptaphysio@gmail.com',
        pass: 'JAISHREESHYAM'
    }
})
exports.sendEmail = async(req, res) => {
    const {name, location, contact} = req.body;
    let mailOptions = {
        from : 'deepakguptaphysio@gmail.com',
        to: 'deepakguptaphysio@gmail.com',
        subject: `from: ${name} for physio session`,
        text: `Name: ${name}, locarion: ${location}`
    }

    transporter.sendMail(mailOptions, function(err, info) {
        if(err){
            console.log('err', err)
            res.json(err)
        }else{
            console.log('info', info)
            res.json(info)
        }
    })
}
exports.sendMessage = async(req, res) => {
    const{firstName,  lastName, contact, email, message} = req.body;
    let mailOptions = {
        from : 'deepakguptaphysio@gmail.com',
        to: 'deepakguptaphysio@gmail.com',
        subject:`Message from ${email}`,
        text: `name: ${firstName + ' ' + lastName},contact: ${contact}, message: ${message}.`
    }

    transporter.sendMail(mailOptions, function(err, info) {
        if(err){
            console.log('err', err)
            res.json(err)
        }else{
            console.log('info', info)
            res.json(info)
        }
    })
}