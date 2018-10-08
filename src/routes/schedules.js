const express = require('express')

//import the controllers and middleware
const { schedulesController } = require('../controllers/index')
const { catchErrors } = require('../middleware/error-handler')

//set up the router
const router = express.Router()

//get all schedules
router.get('/', catchErrors(schedulesController.index))

//make a new boy
router.post('/', catchErrors(schedulesController.store))

//see one boy
router.get('/:id', catchErrors(schedulesController.show))

//get rid of a boy
router.delete('/:id', catchErrors(schedulesController.delete))

//update a boy
router.put('/:id', catchErrors(schedulesController.update))

module.exports = router