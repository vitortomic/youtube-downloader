const express = require('express')
const application = express()
const cors = require('cors')
const bodyParser = require('body-parser')

application.use(cors())
application.use(bodyParser.json())
application.post('/mp3', (request, response)=>{
    let videoUrl = request.body.videoUrl
    response.json({"url": videoUrl})
})

application.post('/video', (request, response)=>{
    let videoUrl = request.body.videoUrl
    response.json({"url": videoUrl})
})

module.exports = application