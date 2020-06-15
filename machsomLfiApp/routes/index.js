var express = require('express');
var router = express.Router();
require("dotenv").config();

const { ACC_SID, AUTH_TOKEN } = process.env;


const client = require('twilio')(ACC_SID, AUTH_TOKEN);

/* GET home page. */
router.get('/', function (req, res, next) {

  sendMessage = () => {
    console.log('sending message..')

    client.messages
      .create({
        body: 'Hi everyone, Boruch Hashem Dr. Kawelblum\'s situation has improved tremeandously. However, he is still in need of much rachamei shamayim. I would therefore like to extend the machsom another 2 weeks. If you would like to stop as of tomorrow,which is the end of the initial 30 days, please call or text me at my regular number  718-913-4600 ASAP.  Thank you.',
        from: '+12513062568',
        statusCallback: 'localhost:3000/status',
        to: '+17189861567',
        function(err, response) {
          if (err) {
            console.log(err)
          }
          else {
            console.log(response)
          }
        }
      })
  }

  sendMessage();

  res.render('index', { title: 'Express' });
});

module.exports = router;
