const express = require('express')

const { authController } = require('../controllers/index')
const { catchErrors }     = require('../middleware/error-handler')

//set up the router
const router = express.Router()

//Register a user
router.post('/register', catchErrors(authController.register))

//Login a user
router.post('/login', catchErrors(authController.login))

module.exports = router

