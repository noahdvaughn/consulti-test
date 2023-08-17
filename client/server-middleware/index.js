const express = require('express')
const app = express()
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



app.use(express.json())


app.post('/email', async (req, res) => {
    const formData = req.body
    console.log(formData)
    if (!formData) return res.status(400).send({ data: 'Data is required' })
  try {
    const msg = {
      to: [
         'nvaughn@megastaradvisors.com'
      ],
      from: 'nvaughn@megastaradvisors.com',
      subject: 'Consulti Test',
      text: formData.message + ' from: ' + formData.email
    }
    
    await sgMail.send(msg)
    res.status(200).send({ data: 'success' })
  } catch (error) {
    console.log(error)
    res.status(500).json({ data: error.message })
  }


})


module.exports = {
    path: '/api',
    handler: app,
  }