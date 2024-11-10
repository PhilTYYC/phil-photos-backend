const express = require('express');
const controller = require('./controller.js')
const router = express.Router();

router.route('/')
    .get((req, res) => {
        controller.getImageList(req, res);
        // res.send(`this is images route, ${req}`);
    });
router.route('/:filename')
    .get((req, res) => {
        controller.getImage(req, res);
    });

module.exports = router;