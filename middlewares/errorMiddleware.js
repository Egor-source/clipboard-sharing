const ApiErrors = require('../exeptions/apiError');
const fs = require('fs');
const format = require('node.date-time');
const path = require('path');

module.exports = (err, req, res, next) => {
    const date = new Date().format('d-M-Y H:M:S');
    const errorString = `${date} - ${err.message}::${err.errors?.join('\n')}\n\n\n `;
    if (!fs.existsSync(`${__dirname}/../${process.env.PATH_TO_ERROR_LOGS}`)) {
        fs.writeFileSync(path.resolve(`${__dirname}/../${process.env.PATH_TO_ERROR_LOGS}`), errorString);
    } else {
        fs.appendFileSync(path.resolve(`${__dirname}/../${process.env.PATH_TO_ERROR_LOGS}`), errorString);
    }
    if (err instanceof ApiErrors) {
        return res.status(err.status)
            .json({
                message: err.message,
                errors: err.errors
            });
    }
    return res.status(500)
        .json({ message: 'Ошибка на сервере' });
};

