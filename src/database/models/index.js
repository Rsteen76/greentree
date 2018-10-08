//bring in the seperate models
const User = require('./user')
const Schedule = require('./schedule')

//import other models in the same manner

//export em in a good ol' bundle 
module.exports = {
  User,
  Schedule
}