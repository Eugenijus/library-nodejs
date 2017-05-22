var express = require('express');

var bookRouter = express.Router();

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
        res.render('bookListView', {
            title: 'Books',
            nav: [
                {Link: '/Books', Text: 'Books'},
                {Link: '/About', Text: 'Authors'}
            ],
            books: books
        });
    });

bookRouter.route('/:id')
    .get(function (req, res) {
        var id = req.params.id;
        res.render('bookView', {
            title: 'Books',
            nav: [
                {Link: '/Books', Text: 'Books'},
                {Link: '/About', Text: 'Authors'}
            ],
            book: books[id]
        });
    });

module.exports = bookRouter;