const mongoose = require('mongoose');

const MetaSchema = mongoose.Schema(
    {
        ImageName: String,
        size: Number,
        format: String
    },
    {
        _id: false
    }
);

const BookSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    genre: String,
    Author: String,
    Year: Number,
    imgurl: String,
    meta: MetaSchema
});

MetaSchema.set('autoIndex', false);
module.exports = mongoose.model('Meta', MetaSchema);
module.exports = mongoose.model('Book', BookSchema);
