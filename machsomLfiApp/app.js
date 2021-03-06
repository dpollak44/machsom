var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var CronJob = require("cron").CronJob;

// require("dotenv").config();

// const { ACC_SID, AUTH_TOKEN } = process.env;


// const client = require('twilio')(ACC_SID, AUTH_TOKEN);

// sendMessage = () => {
//   console.log('sending message..')

//   client.messages
//     .create({
//       body: 'Hi everyone, Boruch Hashem Dr. Kawelblum\'s situation has improved tremeandously. However, he is still in need of much rachamei shamayim. I would therefore like to extend the machsom another 2 weeks. If you would like to stop as of tomorrow,which is the end of the initial 30 days, please call or text me at my regular number  718-913-4600 ASAP.  Thank you.',
//       from: '+12513062568',
//       to: '+17189861567',
//       function(err, response) {
//         if (err) {
//           console.log(err)
//         }
//         else {
//           console.log(response)
//         }
//       }
//     })
// }

// sendMessage();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


let participants = [

  { name: 'Leah Basya Meisels', phone: 8483735111, time: 7 },
  { name: 'Rivky Rand', phone: 9739301153, time: 8 },
  { name: 'Leora Stolbach', phone: 9739301153, time: 9 },
  { name: 'Bracha Weldler', phone: 2487618370, time: 10 },
  { name: 'Batsheva Katzler', phone: 7187557843, time: 11 },
  { name: 'racheli futersak', phone: 6462715028, time: 12 },
  { name: 'chanie freidler', phone: 7326081540, time: 13 },
  { name: 'Nechama Pollak', phone: 7189134600, time: 14 },
  { name: 'Sara gitty Rendler', phone: 9176230958, time: 15 },
  { name: 'Yehudis Mermelstein', phone: 7329175903, time: 16 },
  { name: 'Chaya Miriam Neuman', phone: 3476313327, time: 17 },
  { name: 'chani yosefzadeh', phone: 3474398641, time: 13 },
  { name: 'chaya felner', phone: 9176261482, time: 19 },
  { name: 'adina garber', phone: 9175438375, time: 15 },
  { name: 'Tziporah Lenchitz', phone: 3146307832, time: 18 },
  { name: 'Mechi Katz', phone: 3477938638, time: 19 },
  { name: 'Miriam Pollak', phone: 7182076436, time: 20 },
  { name: 'Ahuva Lasdun', phone: 6467216821, time: 21 },
  { name: 'Nechama Pollak', phone: 7189134600, time: 22 },
  { name: 'Charni sochet', phone: 9178739194, time: 7 },
  { name: 'Blumi steinmetz', phone: 7326930400, time: 8 },
  { name: 'sara zuckerman', phone: 7186730985, time: 9 },
  { name: 'Gitty Rapps', phone: 3473248485, time: 10 },
  { name: 'Efraim Pollak', phone: 7182076400, time: 11 },
  { name: 'dovid', phone: 7189861567, time: 14 },
  { name: 'Malky Zuckerman', phone: 3477200871, time: 16 },
  { name: 'Shoshana Esther tokayer', phone: 3052180113, time: 18 },
  { name: 'Moshe sochet', phone: 7182883831, time: 20 },
  { name: 'Shmuly Sochet', phone: 6467632849, time: 17 },
  { name: 'Shmuly Sochet', phone: 6467632849, time: 21 },
  { name: 'Miriam rosen', phone: 9173246128, time: 22 },
  { name: 'Dovid', phone: 7189861567, time: 23 },
  { name: 'Rivki Kitevitz', phone: 7328147049, time: 15 },
  { name: 'Varda Ullman', phone: 7327194821, time: 18 }
];

// const found = participants.find(f => (f.time === 10));

// console.log(found);



// participants.forEach(part => {



//   client.messages
//     .create({
//       body: 'Hi everyone, Boruch Hashem Dr. Kawelblum\'s situation has improved tremeandously. However, he is still in need of much rachamei shamayim. I would therefore like to extend the machsom another 2 weeks. If you would like to stop as of tomorrow,which is the end of the initial 30 days, please call or text me at my regular number  718-913-4600 ASAP.  Thank you.',
//       from: '+12513062568',
//       to: `+1${part.phone}`
//     })
//     .then(message => console.log(message));

// });






// new CronJob(
//   " 55 * * * *",

//   () => {


//     let today = new Date();

//     let currentHour = today.getHours();

//     let currentDayOfWeek = today.getDay(); //Sunday is 0

//     // console.log(currentHour + 1);

//     const textBody = 'Your machsom lefi will begins in 5 minutes. Please have in mind that it should be a zechus refuah shelaima for Chaim ben Sara. Thank you.';

//     const from = '+12513062568';

//     const filteredPars = participants.filter(par => (par.time === currentHour + 1));

//     //
//     //
//     //remember to program shabbos shut off
//     //
//     //

//     filteredPars.forEach(fpar => {
//       let to = fpar.phone;
//       client.messages
//         .create({
//           body: textBody,
//           from: from,
//           to: to
//         })
//         .then(message => console.log(message));
//       console.log('time', today, 'hour', currentHour, 'textBody', textBody, 'from', from, 'to', to, 'name', fpar.name, 'time', fpar.time);
//     });
//   },
//   null,
//   true
// );









// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
