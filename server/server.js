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
    .pipe(fs.createWriteStream(filepath))
    .on('finish', ()=>{
        fs.createReadStream(filepath)
        .pipe(response)
        .on('finish', ()=>{
            fs.unlinkSync(filepath)
        })
    })
})

application.get('/video', (request, response)=>{
    ytdl('https://youtu.be/tUnUqQh3ynE', { filter: format => format.container === 'mp4' })
    .pipe(fs.createWriteStream('video.mp4'))
    .on('finish', ()=>{
        fs.createReadStream('video.mp4').pipe(response)
    })
})

module.exports = application

//https://youtu.be/tUnUqQh3ynE
