const express = require('express');
const router = express.Router();

router.route('/')
.get((req, res) => {
    console.log('admin');
    res.send('admin route');
});

router.route('/login')
.get((req, res) => {
    console.log('admin/login');
    res.send(`admin login route, ${req}`);
});


module.exports = router;