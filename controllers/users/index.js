const express = require('express');
const router = express.Router();
const controller = require('./controller.js')

router.route('/')
    .get((req, res) => {
        console.log('users');
        res.send(`users route, ${req}`);
    });
router.route('/list')
    .get((req, res) => {
        console.log('users/list');
        controller.getUserList(req, res);
    });
router.route('/login')
    .post((req, res) => {
        controller.login(req, res);
    })
router.route('/hash/:password')
    .get((req, res) => {
        controller.getPassowrdHash(req, res);
    });

module.exports = router;