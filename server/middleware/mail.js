const mailer = require('nodemailer');
const {Hello} = require('../template/hello')
const {Thanks} = require('../template/thank')


const getEmailData = (to, name)=> {
    let data = null;
    template = name;
    switch(template){
        case "hello":
        data = {
            from : "Pujan Shrestha <hakku.stha22@gmail.com>",
            to,
            subject: name,
            html: Hello()
    }
    break;
    case "thanks":
            data = {
                from: "Pujan Shrestha <hakku.stha22@gmail.com>",
                to,
                subject: name,
                html: Thanks()
            }
            break;
    default: data;
    }
    return data
}



const sendEmail = (to, name, type) => {

    const smtpTransport = mailer.createTransport({
        service: "Gmail",
        auth: {
            user: "hakku.stha22@gmail.com",
            pass: "puzaan256"
        }
    }) 

    const mail = getEmailData(to, name, type)

    smtpTransport.sendMail(mail, function(error, response) {
        if(error) {
            console.log(error)
        } else {
            console.log( " email sent successfully")
        }
        smtpTransport.close();
    })

}
module.exports = { sendEmail }