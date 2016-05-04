var express = require('express');
var app = express();

app.engine('html', require('ejs').renderFile);

app.use("/public/fonts", express.static(__dirname + "/public/fonts"));
app.use("/public/css", express.static(__dirname + "/public/css"));
app.use("/public/js", express.static(__dirname + "/public/js"));
app.use("/node_modules", express.static(__dirname + "/node_modules"));

app.get('/slider', function (req, res) {
  res.render('../slider.html');
});

app.get('/home', function (req, res) {
  res.render('../home.html');
});

app.listen(3001, function () {
  console.log('The magic port is 3001!');
});
