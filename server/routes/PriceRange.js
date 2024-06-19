const express = require("express")
const router = express.Router()

const { getPriceRangeDistribution } = require('../controllers/PriceRange');

router.post("/get-priceRange", getPriceRangeDistribution)

// Export the router for use in the main application
module.exports = router