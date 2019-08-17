const express = require('express');
const Book = require('../models/book');
const router = new express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const hosturl = 'http://localhost:3000/';

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

router
    .route('')
    .get((req, res) => {
        Book.find().then(book => res.json(book));
    })
    .post(upload.single('bookimg'), (req, res) => {
        console.log(req.file);
        let book = new Book({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            genre: req.body.genre,
            Author: req.body.Author,
            Year: req.body.Year,
            imgurl: hosturl + req.file.path.replace(/\\/g, '/'),
            meta: {
                ImageName: req.file.originalname,
                size: req.file.size,
                format: req.file.mimetype
            }
        });
        book.save().then(savedbook => res.send(book));
    });

router
    .route('/:id')
    .put((req, res) => {
        Book.findByIdAndUpdate(
            req.params.id,
            {
                name: req.body.name,
                genre: req.body.genre,
                Author: req.body.Author,
                Year: req.body.Year
            },
            { new: true }
        ).then(book => {
            if (!book) {
                return res.status(404).send({
                    message: 'Book not Find with the ID' + req.params.id
                });
            }
            res.send(book);
        });
    })
    .delete((req, res) => {
        Book.findByIdAndRemove(req.params.id).then(book => {
            if (!book) {
                return res.status(404).send({
                    message: 'Book not found with id ' + req.params.noteId
                });
            }
            return res.status(200).send({
                message: 'Book Deleted Successfully'
            });
        });
    });

module.exports = router;
