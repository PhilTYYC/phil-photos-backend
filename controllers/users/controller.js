// import { users } from './constants.js';
const { USERS } = require('./constants');
const crypto = require('crypto');

function getUserList(req, res) {
    res.send(USERS);
};

function getPassowrdHash(req, res) {
    const { password } = req.params;
    console.log({password});
    const hash =  crypto.createHash('sha256').update(password).digest('hex');
    console.log({hash});
    res.send(hash);
};

function login(req, res) {
    const {username, password} = req.query;
    console.log(username, password);

    console.log(USERS);

    let foundUser
    
    USERS.forEach(user => {
        if (user.username === username) foundUser =  user;
    });
    console.log({foundUser});
    res.send('Eden Rocks!');
}

module.exports = {
    getUserList,
    getPassowrdHash,
    login,
};
