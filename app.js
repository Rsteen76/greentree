const express             = require('express');
const path                = require('path');
const favicon             = require('serve-favicon');
const cookieParser        = require('cookie-parser');
const bodyParser          = require('body-parser');
const mongoose            = require('mongoose');
const cors                = require('cors')
const morgan              = require('morgan');
const trunks              = require('trunks-log')
const fs                  = require('fs');
const session = require('express-session');
const jwt                 = require('jsonwebtoken');
const passport            = require('passport');
const passportJWT         = require('passport-jwt');
const ExtractJwt          = passportJWT.ExtractJwt;
const JwtStrategy         = passportJWT.Strategy;
const jwtOptions          = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
jwtOptions.secretOrKey    = 'movieratingapplicationsecretkey';
const app                 = express();

app.use(cors())
// app.use(session({
//   secret: config.SECRET,
//   resave: true,
//   saveUninitialized: true,
//   cookie: { httpOnly: false }
// }))
app.use(passport.initialize());
app.use(passport.session());
const logs = new trunks('', 'yellow', '')

// const index = require('./src/routes/index');
const { apiRoutes } = require('./src/routes/index')
const { webRoutes } = require('./src/routes/index')


// Use native ES6 Promises since mongoose's are deprecated.
mongoose.Promise = global.Promise


// Connect to the database
mongoose.connect(process.env.MONGO_URI, { useMongoClient: true }, () => {
  console.log("DB is connected");
});

// Fail on connection error.
mongoose.connection.on('error', error => { throw error });

// Include controllers
// fs.readdirSync("controllers").forEach(function (file) {
//   if(file.substr(-3) == ".js") {
//     const route = require("../src/controllers/" + file)
//     route.controller(app)
//   }
// })

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/api', apiRoutes);
app.use('/web', webRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
});

module.exports = app;


logs.success('App running on http://localhost:{}', process.env.PORT)