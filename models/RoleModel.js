const {
    Schema,
    model
} = require('mongoose');

const RoleModel = new Schema({
    roleName: {
        type: String,
        unique: true,
        require:true,
        default:'ADMIN'
    },
});

module.exports = model('RoleModel', RoleModel);