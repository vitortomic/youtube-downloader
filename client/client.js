const express = require('express')
const application = express()
const path = require("path")
const directory = path.join(__dirname, 'public')

const apiUrl = {
    apiUrl: null
}

application.use(express.static(directory))

application.get('/', (request, response)=>{
    response.sendFile(`${directory}/view/index.html`)
})

application.get('/api-url', (request, response)=> {
    response.json(apiUrl)
})

module.exports = {
    application,
    apiUrl
}
