const express = require('express')
const app = express()
const mongoose = require('mongoose');

// routes

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/blog', function (req, res) {
    res.send('Hello Blog. My name is ninja.')
  })

mongoose.
connect('mongodb+srv://nishthabarnwal273:clvchfsCJzDPYymr@cluster0.0vjvjf9.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0')
.then(() => {
    console.log("connected to MongoDB");
    app.listen(3000, () => {
        console.log("Node API is running on port 3000")
    })
}).catch((error) => {
    console.log(error)
})