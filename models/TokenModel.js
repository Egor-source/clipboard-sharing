const {
    Schema,
    model
} = require('mongoose');

const TokenModel = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    refreshToken: {
        type: String,
        require: true
    }
});

module.exports = model('Token', TokenModel);