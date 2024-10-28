require('dotenv').config()
const express = require('express')
const userRoute = require('./routes/userRoute')
const app = express()

app.use('/user', userRoute)

const port = process.env.PORT || 8000
app.listen(port, ()=>console.log('Server on', port))