const open = require('open')
const http = require('http')
const videoDownloadApi = require('./server/server.js')
const clientApplication = require('./client/client.js')

const videoServer = http.createServer(videoDownloadApi)

videoServer.listen(0, ()=>{
    console.log(`Video processing server listening on port ${videoServer.address().port}`)
})

let apiUrl = `http://localhost:${videoServer.address().port}`

const clientServer = http.createServer(clientApplication)

clientServer.listen(0, ()=>{
    console.log(`Web application server listening on port ${clientServer.address().port}`)
    openUrl(`http://localhost:${clientServer.address().port}`)
})

const openUrl = async (url)=>{
    await open(url)
}

