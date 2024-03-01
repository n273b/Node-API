const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/productModel')
const app = express()

app.use(express.json())

// routes

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/blog', function (req, res) {
    res.send('Hello Blog. My name is ninja.')
  })

app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/products/:id', async(req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/products', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
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