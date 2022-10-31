const jwt = require('jsonwebtoken');
const TokenModel = require('../models/TokenModel');

class TokenService {
    generateTokens (payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '1h' });
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '31d' });
        return {
            accessToken,
            refreshToken
        };
    }


}

module.exports = new TokenService();