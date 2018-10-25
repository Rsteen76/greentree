var mongoose = require('mongoose');
var passport = require('passport');
require('../config/passport')(passport);
var jwt = require('jsonwebtoken');
const {User} = require('../database/models')
var settings = require('../config/settings'); // get settings file

const trunks = require('trunks-log')
const log = new trunks('USERS')

// register a new user
exports.register = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const newUser = new User({
      name,
      email,
      password,
    });
  
    User.createUser(newUser, (error, user) => {
      if (error) {
        res.status(422).json({
          message: 'Something went wrong. Please try again after some time!',
        });
      }
      res.send({
        user
      });
    });
  }
  
  // login a user
  exports.login = async (req, res) => {
    if (req.body.email && req.body.password) {
      const email = req.body.email;
      const password = req.body.password;
      User.getUserByEmail(email, (err, user) => {
        if (!user) {
          res.status(404).json({
            message: 'The user does not exist!'
          });
        } else {
          User.comparePassword(password, user.password, (error, isMatch) => {
            if (error) throw error;
            if (isMatch) {
              const payload = {
                id: user.id
              };
              const token = jwt.sign(payload, process.env.SECRET);
              res.json({
                message: 'ok',
                token,
                name: user.name
              });
            } else {
              res.status(401).json({
                message: 'The password is incorrect!'
              });
            }
          });
        }
      });
    }
  };
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