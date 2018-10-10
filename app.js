import express, { static } from 'express';
import { join } from 'path';
import favicon from 'serve-favicon';
import cookieParser from 'cookie-parser';
import { json, urlencoded } from 'body-parser';
import { Promise, connect, connection } from 'mongoose';
import cors from 'cors';
import trunks from 'trunks-log';
const app = express();

app.use(cors())
const logs = new trunks('', 'yellow', '')

// const index = require('./src/routes/index');
import { apiRoutes } from './src/routes/index';
import { webRoutes } from './src/routes/index';

// Use native ES6 Promises since mongoose's are deprecated.
Promise = global.Promise

// Connect to the database
connect(process.env.MONGO_URI, { useMongoClient: true }, () => {
  console.log("DB is connected");
});

// Fail on connection error.
connection.on('error', error => { throw error });


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(static(join(__dirname + 'public')));

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

export default app;


logs.success('App running on http://localhost:{}', process.env.PORT)