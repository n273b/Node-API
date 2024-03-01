const express = require('express')
const app = express()

// routes

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/blog', function (req, res) {
    res.send('Hello Blog. My name is ninja.')
  })

app.listen(3000)