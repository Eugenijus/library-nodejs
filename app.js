var express = require('express');

var app = express();
var port = process.env.PORT || 5000;
var bookRouter = express.Router();

app.use(express.static('public'));
//app.use(express.static('src/views'));

app.set('views', './src/views');
app.set('view engine', 'ejs');

var books = [
        {
            title: 'War and Peace',
            genre: 'Historical Fiction',
            author: 'Lev Nikolayevich Tolstoy',
            read: false
        },
        {
            title: 'The Wind in the Willows',
            genre: 'Fantasy',
            author: 'Kenneth Grahame',
            read: false
        },
        {
            title: 'Life On The Mississippi',
            genre: 'History',
            author: 'Mark Twain',
            read: false
        }
    ];

bookRouter.route('/')
    .get(function (req, res) {
        /*looks for books.ejs */
        res.render('books', {
            title: 'Books',
            nav: [
                {Link: '/Books', Text: 'Books'},
                {Link: '/About', Text: 'Authors'}
            ],
            books: books
        });
    });

bookRouter.route('/single')
    .get(function (req, res) {
        res.send('Hello Single Book');
    });

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
