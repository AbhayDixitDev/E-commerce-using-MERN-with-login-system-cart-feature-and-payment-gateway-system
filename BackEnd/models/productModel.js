const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: String, required: true },
    img: [{ type: String, required: true }],
    description: { type: String, required: true }
});

module.exports = mongoose.model('ecommerce-products', productSchema);
