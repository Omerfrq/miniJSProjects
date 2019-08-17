const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Bookrouter = require('./routes/book');

//connecting to the db
mongoose
    .connect('mongodb://localhost:27017/Booksdb', {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('Connected to the Db');
    })
    .catch(err => {
        console.log('Cannot Connect to the Db', err);
    });

//initialization an express app
const app = express();

//static folder route
app.use('/uploads', express.static('./uploads'));

//implementing cors for request
app.use(cors());

//bodyparser for form data
app.use(bodyParser.urlencoded({ extended: true }));

//body parser for json data
app.use(bodyParser.json());

//book route
app.use('/book', Bookrouter);

const Port = process.env.Port || 3000;
app.listen(Port, () => {
    console.log(`listening on http://localhost:3000/book`);
});
