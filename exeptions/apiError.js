module.exports = class ApiErrors extends Error {
    constructor (status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedErrors () {
        return new ApiErrors(401, 'Пользователь не авторизован');
    }

    static BadRequest (message, errors=[]) {
        return new ApiErrors(400, message, errors);
    }

    static InternalServerError (message, errors=[]) {
        return new ApiErrors(500, message, errors);
    }
};

