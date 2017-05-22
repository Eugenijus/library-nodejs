var express = require('express');

var app = express();
var port = process.env.PORT || 5000;
var nav = [ {Link: '/Books', Text: 'Books'},
            {Link: '/About', Text: 'Authors'}
            ];
var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));
//app.use(express.static('src/views'));

app.set('views', './src/views');
app.set('view engine', 'ejs');


app.use('/Books', bookRouter);

app.get('/', function (req, res) {
    //res.send('hello world!');
    res.render('index', {
        title: 'Hello from render EJS',
        nav: [
            {Link: '/Books', Text: 'Books'},
            {Link: '/About', Text: 'Authors'}
        ]
    });
});

app.get('/books', function (req, res) {
    res.send('hello books!');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});
