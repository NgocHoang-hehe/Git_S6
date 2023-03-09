1111111111111111111111111111111
0000000000000000000000000000000
var path = require('path');
222222222222222222222222222222222222
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
1111111111111111111111111111111
<<<<<<< HEAD
và thay đổi một file bất kì khác
- Commit và push lên Remote
=======
>>>>>>> HoangThiNgoc
var app = express();
5688999
=======
1233
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
111
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
333333333333333333333333333333333333333333333333333
app.use('/', indexRouter);
4444444444444444444444444444444444444444444444444

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
