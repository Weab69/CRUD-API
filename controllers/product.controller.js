const  Product  = require('../models/products.model')

const getProduct = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
const getByid = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const postProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product) {
            return res.status(404).send('Product doesnt exist')
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndDelete(id)
    if (!product) {
        return res.status(404).send('Product does not exist')
    }
    res.status(200).json({ msg: 'Product deleted sucessfully ' })
}

module.exports = { getProduct, getByid, postProduct, updateProduct, deleteProduct }