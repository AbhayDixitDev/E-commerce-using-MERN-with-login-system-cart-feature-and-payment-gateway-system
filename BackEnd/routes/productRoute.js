const router = require('express').Router();
const Product = require('../models/productModel');


router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.post('/create', async (req, res) => {
    const { title, price, img, description } = req.body;
    try {
       const product = await Product.create({ title, price, img, description });
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router