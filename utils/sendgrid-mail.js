const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
//   to: 'dean@deandraper.dev',
//   from: 'admin@frontendcheatsheet.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };


// sgMail.send(msg)
// .then(() => {
//   console.log('Email sent')
// }) 
// .catch((error) => {
//   console.error(error)
// })

export const sendEmailMessage = (to, subject, text, html) => {
  const msg = {
    to,
    from: 'admin@frontendcheatsheet.com',
    subject,
    text,
    html
  }

  sgMail.send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
}
