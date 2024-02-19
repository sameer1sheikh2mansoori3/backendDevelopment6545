const express = require('express');
const { register } = require('../controllers/User');
const { createNote } = require('../controllers/Note');
const { tempFun } = require('../controllers/Temp');
const {tempFun2} = require('../controllers/Temp2');

const Router = express.Router();

const eighteensaalkahai = (req, res, next) => {
    if (req.body.age >= 18) {
        return next();
    }
    else return res.send('Not 18');
}

Router.post('/auth/register', eighteensaalkahai, register);

Router.get('/api/v1/notes', eighteensaalkahai,createNote );
Router.get('/api/v1/temp' , tempFun)
Router.get('/api/v1/temp2' ,tempFun2)

// Router.post('/auth/login', login);

module.exports = Router;