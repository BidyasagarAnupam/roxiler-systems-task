const express = require("express")
const router = express.Router()

const { getCombinedData } = require('../controllers/CombineData');

router.post("/get-combine-data", getCombinedData)

// Export the router for use in the main application
module.exports = router