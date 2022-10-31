const { validationResult } = require('express-validator');
const authService = require('../services/authService');
const ApiErrors = require('../exeptions/apiError');

class AuthController {
    async adminRegistration (req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiErrors.BadRequest('Ошибка валидации', errors));
            }
            const tokens = await authService.adminRegistration(req.body);
            res.status(200)
                .json({ message: 'Администратор успешно зарегестрирован', tokens});
        } catch (e) {
            next(e);
        }
    }

    async login (req, res) {

    }
}

module.exports = new AuthController();