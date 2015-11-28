var path = require('path');
var appRoot = path.join(__dirname);

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 7010;

app.set('view engine', 'hbs');
app.set('views', path.join(appRoot, 'public/templates'));
app.use(express.static(path.join(appRoot, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(port, function() {
  process.stdout.write(`\nnode-gulp-webpack is running the ${env} environment on port ${port}\n\n`);
});
