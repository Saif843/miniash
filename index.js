require('dotenv').config()

const express = require('express')

const app = express()


app.get('/login', (req, res) => {
    res.send("Saif Ali Khan")
})


app.get('/', (req, res) => {
    res.send("Ali Khan")
})
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port: ${process.env.PORT}`)
})