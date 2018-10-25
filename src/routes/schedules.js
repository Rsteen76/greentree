const express = require('express')
const { schedulesController } = require('../controllers/index')
const { catchErrors } = require('../middleware/error-handler')
var passport = require('passport');
require('../config/passport')(passport);

//Set up the router
const router = express.Router()

//Get all schedules
router.get('/', catchErrors(schedulesController.index))

//Make a new Schedule
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {schedulesController.store} else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }})

//Show a Schedule
router.get('/:id', catchErrors(schedulesController.show))

//Delete Schedule
router.delete('/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {schedulesController.delete} else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }})

//Update a schedule
router.put('/:id',passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {schedulesController.update} else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }})

module.exports = router
