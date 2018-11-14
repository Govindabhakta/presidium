var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: {type: String, required: true},
    id: {type: String, required: false},
    content: {type: String, required: true},
    author: {type: String, required: true},
    dirtype: {type: String,  required: false},
    reviewed: {type: Boolean, default: false}
})

module.exports = mongoose.model('directive', schema, 'Directives')
