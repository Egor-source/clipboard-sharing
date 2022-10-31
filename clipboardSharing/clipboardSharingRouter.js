const express = require('express');
const router = new express.Router();
const controller = require('./clipboardSharingController');

router.get('/getClipboard',  controller.getClipboard);
router.post('/setClipboard', controller.setClipboard);

module.exports = router;