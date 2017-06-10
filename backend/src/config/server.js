const port = 3003;

//Dependecies
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(allowCors)
    //Start Server
server.listen(port, () => {
    console.log(`Backend is running on port ${port}`);
})

module.exports = server