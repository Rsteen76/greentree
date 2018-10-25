/*
 * This file is used to build the API routes, we may have 
 * different routes for views and the like
 */
var passport = require('passport');
require('../config/passport')(passport);
const express = require('express')

const userRoutes = require('./users') 

const scheduleRoutes = require('./schedules')

const authRoutes = require('./auth')

const router = express.Router() //make a new router

router.use('/auth', authRoutes)

router.use('/users', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {userRoutes} else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }}) 

router.use('/schedules', scheduleRoutes);

module.exports = router

getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };