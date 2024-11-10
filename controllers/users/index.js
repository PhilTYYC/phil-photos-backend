const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        console.log('users');
        res.send(`this is users route, ${req}`);
    });
router.route('/list')
    .get((req, res) => {
        console.log('users/list');
        res.send(`this is users list route, ${req}`);
    });

module.exports = router;