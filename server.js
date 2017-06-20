let express = require('express');
let Movie = require('./model');
let app = express();
console.log(123);
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    Movie.find({}, function (err, movies) {
        res.render('index', {movies});
    });
});
app.listen(8080);
