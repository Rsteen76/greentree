//import the schedule constant explicitly
const { Schedule } = require('../database/models')
const trunks = require('trunks-log')
const log = new trunks('SCHEDULES')
var passport = require('passport');
var jwt = require('jsonwebtoken');
require('../config/passport')(passport);

//show all schedules
exports.index =  async (req, res) => {
  //query the DB of all schedules
  await Schedule.find().exec()
  .then(schedules => {
    log.success('Retrieved all {} schedules', schedules.length)
    res.json({ schedules: schedules})
  })
  .catch(err => {
    log.error(err, 'Could not retrieve schedules: {}', err.message)
    res.json({ error: err, message: "Could not retrieve schedules"}).status(500)
  })
} 

//Store a new schedule
exports.store = async (req, res) => {
  let schedule = new Schedule(req.body)
  //save it in the DB
  await schedule.save()
    .then(schedule => {
      log.success('Created schedule: {}', schedule.email)
      //send a 201 and the new resource
      res.status(201).json({ data: schedule })
    })
    .catch(err => {
      log.error(err, 'Error creating schedule: {}', schedule.email)
      let errStatus = err.name === 'ValidationError' ? 400 : 500
      res.status(errStatus).json({err: err})
    })
}

//this function is for looking at one schedule by their mongo id
exports.show = async (req, res) => {

  //Find a schedule
  await schedule.findById(req.params.id).exec()
  .then(schedule => {
    log.success('Found schedule: {}', schedule.name)
    res.json({ schedule: schedule})
  })
  .catch(err => {
    log.error(err, 'Error finding schedule: {}', req.params.id)
    res.json({ error: err, message: 'Could not retrieve schedule'}).status(500)
  })
}

//Delete a Schedule 
exports.delete = async (req, res) => {
  //find the sneaky boye and make him go away
  await Schedule.findByIdAndRemove(req.params.id).exec()
  .then(() => {
    log.success('Deleted schedule: {}', req.params.id)
    //let em know there aint no content no mo
    res.status(204).json()
  })
  .catch(err => {
    log.error(err, 'Error finding schedule: {}', req.params.id)
    res.status(500).json({err: err})
  })
}

//Edit a schedule based on ID
exports.update = async (req, res) => {
  await Schedule
  .findByIdAndUpdate(req.params.id, req.body, { new: true })
  .exec()
    .then(schedule => {
      log.success('Updated schedule: {}', req.params.id)
      res.status(200).json({schedule: schedule})
    })
    .catch(err => {
      log.error(err, "Could not update schedule: {}", req.params.id)
      res.status(500).json({err: err})
    })
}


