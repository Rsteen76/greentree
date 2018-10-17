//Here is where we declare the modules and shit we will need
const express = require('express')
const passport = require('passport');

//import the controllers and middleware
const { usersController } = require('../controllers/index')
const { catchErrors } = require('../middleware/error-handler')

//set up the router
const router = express.Router()

//get all users
router.get('/', passport.authenticate('jwt', { session: false }), catchErrors(usersController.index))

//make a new boy
router.post('/', catchErrors(usersController.store))

//see one boy
router.get('/:id', catchErrors(usersController.show))

//get rid of a boy
router.delete('/:id', catchErrors(usersController.delete))

//update a boy
router.put('/:id', catchErrors(usersController.update))

//register a user
router.post('/register', catchErrors(usersController.register))

//login a user
router.post('/login', catchErrors(usersController.login))

module.exports = router