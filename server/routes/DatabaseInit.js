const express = require("express")
const router = express.Router()

const { intializeDB } = require('../controllers/DatabaseInitialization');

router.post("/intializeDB", intializeDB)

// Export the router for use in the main application
module.exports = router