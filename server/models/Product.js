const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    id: {
        type: Number
    }, 
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: { 
        type: String
    },
    category: { 
        type: String,
        required: true
    },
    image: { 
        type: String
    },
    sold: { 
        type: Boolean, 
        default: false
    },
    dateOfSale: { 
        type: Date
    }
});

module.exports = mongoose.model("Product", productSchema);
