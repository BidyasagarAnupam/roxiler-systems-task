const express = require("express")
const router = express.Router()

const { getStatistics } = require('../controllers/Statistics');

router.post("/get-transaction-statistics", getStatistics)

// Export the router for use in the main application
module.exports = router