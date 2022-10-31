let clipboardy;
(async () => {
    const clip = await import('clipboardy');
    clipboardy = clip.default;
})();
const ApiError = require('../exeptions/apiError');

class ClipboardSharingController {
    async getClipboard (req, res, next) {
        try {
            const text = clipboardy.readSync();
            res.status(200)
                .json(text);

        } catch (e) {
            next(ApiError.InternalServerError('Error: Невозможно передать буфер обмена'), [e]);
        }
    }

    async setClipboard (req, res, next) {
        try {
            clipboardy.writeSync(req.body.clipboardData);
            res.status(200)
                .json('Буфер обмена передан');

        } catch (e) {
            console.log(e);
            next(ApiError.InternalServerError('Error: не удалось сохранить данные в буфер обмена'), [e]);
        }
    }
}

module.exports = new ClipboardSharingController();