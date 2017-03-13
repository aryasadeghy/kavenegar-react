var express = require('express');
// Create our app
var app = express();




app.use(express.static('public'));

app.use(function(req, res, next){
  if (req.headers['x-forwarded-proto'] === 'http'){
    next();
  }else{
    res.redirect('http://'+ req.hostname + req.url)
  }
});
const port = process.env.PORT;
app.listen(port, function () {
  console.log('Express server is up on port '+ port);
});
