var express = require('express');
// Create our app
var app = express();

var Kavenegar = require('kavenegar');



app.use(express.static('public'));

// app.get('/:receptor/:token/:template/:key', function (req, res) {
// //  console.log(req.params.receptor);
// //  console.log(req.params.token);
//   var api = Kavenegar.KavenegarApi({
//       apikey: req.params.key
//   });
//  api.VerifyLookup({
//       receptor: req.params.receptor,
//       token: req.params.token,
//       template: req.params.template
//   },function(response, status) {
//         console.log(response);
//         console.log(status);
//     });
//
// });
// app.get('/Simple/:receptor/:message/:sender/:key', function (req, res) {
// //  console.log(req.params.receptor);
// //  console.log(req.params.token);
//   var api = Kavenegar.KavenegarApi({
//       apikey: req.params.key
//   });
//  api.Send({
//       receptor: req.params.receptor,
//        message: req.params.message,
//        sender: req.params.sender,
//   },function(response, status) {
//         console.log(response);
//         console.log(status);
//     });
//
// })
app.listen(80, function () {
  console.log('Express server is up on port 3000');
});
