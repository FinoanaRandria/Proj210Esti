const router = require('express').Router();
const {google} = require('googleapis')

const GOOGLE_CLIENT_ID = '836847127018-pg8alvd7n1trkk9elgg5bu4du73s6q9a.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET ='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'

const oauth2client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  'http://localhost:3000'
)
const REFRESH_TOKEN = '1//03br8NunW1DEmCgYIARAAGAMSNwF-L9Ir1DokMOcEc9giOmNEonu6FRkJgH6nK47KOVnVgfJwTRhoKv9HmuiSOcpvR-3UYwJ6DRk'

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/create-tokens', async(req, res, next) =>{
  try {
    const { code } = req.body
    const {tokens} =await oauth2client.getToken(code)
    
    res.send(tokens)
  } catch (error) {
    next(error)
  }
})

router.post('/create-events', async(req, res, next) => {
  try {
    const {summary,description,to, location, startDateTime, endDateTime} = req.body

    oauth2client.setCredentials({refresh_token: REFRESH_TOKEN})
    const calendar = google.calendar('v3')
    const response = await calendar.events.insert({
      auth: oauth2client,
      calendarId:'primary',
      requestBody: {
        summary:summary,
        description:description,
        location:location, 
        colorId: '7',
        start:{
          dateTime: new Date(startDateTime)
        },
        end: {
          dateTime: new Date(endDateTime)
        },
        attendees:[
          {email: to}
        ]
      }
    })
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: req.body.to, // Change to your recipient
      from: 'johannamisaela@gmail.com', // Change to your verified sender
      subject: req.body.summary,
      text: req.body.description,
      html: req.body.description,
      start:req.body.startDateTime,
      end: req.body.endDateTime,
    
    }
    console.log(msg)
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
    

      





    res.send(response)
 




  } catch (error) {
    next(error)
  }
})

module.exports = router;
