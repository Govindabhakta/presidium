var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true},
    desc: {type: String, required: false},
    content: {type: String, required: true},
    imgName: {type: String, required: false},
    author: {type: String, required: false},
    type: {type: String, required: false},
    published: {type: Date, required: false}
})

module.exports = mongoose.model('news', schema, 'Press')