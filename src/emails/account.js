const sgmail =require('@sendgrid/mail')
const { text } = require('express')

const sendgridAPIkey =process.env.SENDGRID_API_KEY
sgmail.setApiKey(sendgridAPIkey)

// sgmail.send({
//     to:'onkarviralekar.143@gmail.com',
//     from:'onkarviralekar.143@gmail.com',
//     subject:'this is my first creation',
//     text:'I hope this one will get you actually'
// })


const sendWelcomeEmail= (email,name)=>{
    sgmail.send({
        to:email,
        from:'onkarviralekar.143@gmail.com',
        subject:'Thanks for joining name',
        text:`Welcome to the app, ${name}.Let me know how you get along with app`
    
    })
}

const cancleEmail=(email,name)=>{
    sgmail:send({
        to:email,
        from:'onkarviralekar.143@gmail.com',
        subject:'Canceling your acount',
        text:`Goodbye  ${name} I hope you will join sometime soon`


    })
}
module.exports={
    sendWelcomeEmail,
    cancleEmail
}