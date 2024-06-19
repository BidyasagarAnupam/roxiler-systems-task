const axios = require('axios');

const Product = require('../models/Product');

// Database Initialization
exports.intializeDB = async (req, res) => { 
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const seedData = response.data;
        // console.log("seedData", seedData);

        // Data validation
        if (!seedData) {
            return res.status(400).json({ message: 'No seed data found' });
        }

        // Loop through seed data and save to MongoDB
        for (const item of seedData) {
            const newProduct = new Product(item);
            await newProduct.save();
        }

        res.status(201).json({ message: 'Database initialized successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error initializing database' });
    }
}