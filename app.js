const express = require('express')
const app = express()
const port = process.env.PORT || 8000
require('/conn')
const cookieParser = require('cookie-parser')


app.use(cookieParser())

const dotenv = require('dotenv')
const router = require('./router/auth')
app.use(express.json())
app.use(router)
app.listen(port, () => { console.log("success"); })
