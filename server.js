let express = require('express');
let Movie = require('./model');
let app = express();
console.log("服务启动");
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    Movie.find({}, function (err, movies) {
        res.render('index', {movies});
    });
});
app.listen(8080);
