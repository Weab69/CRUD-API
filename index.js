const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/products.model.js')
const productRoute = require('./routes/product.routes.js')
//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//routes
app.use('/api/products', productRoute)


mongoose.connect('mongodb+srv://yeabyeabyeab:yeabyeabyeab@nodeapidb.nmzpw2d.mongodb.net/Node-API?retryWrites=true&w=majority&appName=NodeApiDB')
    .then(() => {
        app.listen(3000, () => {
            console.log('server listinig on port 3000');
        })
        console.log('Database connectd');
    })
    .catch(() => { console.log('Database connection failed'); })
