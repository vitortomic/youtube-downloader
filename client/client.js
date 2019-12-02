const express = require('express')
const application = express()
const path = require("path")
const directory = path.join(__dirname, 'public')

application.use(express.static(directory))

application.get('/', (request, response)=>{
    response.sendFile(`${directory}/view/index.html`)
})

module.exports = application
