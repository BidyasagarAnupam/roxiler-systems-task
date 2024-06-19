const express = require("express")
const router = express.Router()

const { getUniqueCategory } = require('../controllers/Category');

router.post("/get-unique-category", getUniqueCategory)

// Export the router for use in the main application
module.exports = router