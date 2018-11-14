var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
    username: {type: String, require: true},
    password: {type: String, require: true},
    country: {type: String, require: false},
    permissions: {type: Number, require: false, default: 0},
    creation_dt: {type: Date, require: true}
})

schema.statics.hashPassword = function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

schema.methods.isValid = function(hashedPassword) {
    return bcrypt.compareSync(hashedPassword, this.password);
}

module.exports = mongoose.model('User', schema, 'Users');