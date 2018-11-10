const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  email: String,
  password: String
});

 UserSchema.methods.getUserByEmail = (email, callback) => {
    const query = { email };
    User.findOne(query, callback);
  };

UserSchema.methods.comparePassword = function (passw, cb) {
  console.log('Comaparing Passwords')
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};
module.exports = mongoose.model('User', UserSchema);