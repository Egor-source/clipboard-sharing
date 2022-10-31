const {
    Schema,
    model
} = require('mongoose');
const Role = require('./RoleModel');

const UserModel = new Schema({
    username: {
        type: String,
        unique: true,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: [{
        type: Object,
        ref: Role
    }]
});

module.exports = model('UserModel', UserModel);