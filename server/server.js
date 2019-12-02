const express = require('express')
const application = express()

application.get('/', (request, response)=>{
    response.send('testApi')
})

module.exports = application