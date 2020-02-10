const express = require('express')
const application = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const ytdl = require('ytdl-core')
const fs = require('fs')

const filepath = 'video.mp4'

application.use(cors())
application.use(bodyParser.json())
application.post('/mp3', (request, response)=>{
    response.pipe(ytdl(request.body.videoUrl))
})

application.post('/video', (request, response)=>{
    ytdl(request.body.videoUrl, { filter: format => format.container === 'mp4' })
    .on('error', (error)=>{
        console.log(error)
        response.send(error)
    })
    .pipe(fs.createWriteStream(filepath))
    .on('finish', ()=>{
        fs.createReadStream(filepath)
        .pipe(response)
        .on('finish', ()=>{
            fs.unlinkSync(filepath)
        })
    })
})

module.exports = application
