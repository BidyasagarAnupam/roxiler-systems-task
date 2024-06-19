const express = require("express")
const router = express.Router()

const { allTransaction } = require('../controllers/Transactions');

router.post("/get-transaction", allTransaction)

// Export the router for use in the main application
module.exports = router