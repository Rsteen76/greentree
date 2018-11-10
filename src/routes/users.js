//Here is where we declare the modules and shit we will need
const express = require('express')
//import the controllers and middleware
const  { usersController }  = require('../controllers/index')
const  { catchErrors }  = require('../middleware/error-handler')
const checkAuth = require('../middleware/check-auth')

//set up the router
const router = express.Router()

//get all users 
router.get('/', catchErrors(usersController.index))

//make a new schedule
router.post('/', catchErrors(usersController.store))

//see one schedule
router.get('/:id', catchErrors(usersController.show))

//get rid of a schedule
router.delete('/:id', catchErrors(usersController.delete))

//update User
router.put('/:id', catchErrors(usersController.update))

module.exports = router