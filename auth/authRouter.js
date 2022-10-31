const express = require('express');
const router = new express.Router();
const controller = require('./authController');
const { check } = require('express-validator');

router.post('/adminRegistration', [
    check('username', 'Error: Имя пользователя не может быть пустым')
        .notEmpty(),
    check('password', 'Error: Пароль должен состоять минимум из 8 символов')
        .isLength({ min: 8,max:Infinity })
], controller.adminRegistration);
router.post('/login', controller.login);
module.exports = router;