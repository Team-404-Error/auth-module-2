'use strict';

// =============== 3RD PARTY DEPENDENCIES =======
const express = require('express');
const routes = express.Router();

// =============== ESOTERIC FILES ===============
const Users = require('../auth/models/users.js');
const basic = require('../auth/middleware/basic.js');
const bearer = require('../auth/middleware/bearer.js');
const can = require('../auth/middleware/acl.js');

// =============== ROUTES =======================
// --------------- LOGIN PAGE ---------------
routes.get('/', (req, res) => {
  res.render('index')
})

// --------------- PROFILE PAGE ---------------
routes.get('/profile', (req, res) => {
  res.redict('profile')
})

// --------------- SIGNUP ROUTE ---------------
routes.post('/signup', async (req, res, next) => {
  try {
    let user = new Users(req.body);
    const userRecord = await user.save();
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output)
  } catch(error) {
    next(error.message)
  }
});

// --------------- SIGNIN ROUTE ---------------
routes.post('/signin', basic, (req, res, next) => {
  const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user)
});

// --------------- USERS ROUTE ---------------
routes.get('/users', bearer, async (req, res, next) => {
  const users = await Users.find({});
  const list = users.map(user => user.username);
  res.status(200).json(list);
});

// --------------- SECRET ROUTE ---------------
routes.get('/admin-area', bearer, can('delete'), async (req, res, next) => {
  res.status(200).send('/secret')
});

// --------------- SECRET ROUTE REDIRECT ---------------
routes.get('/secret', async (req, res, next) => {
  res.status(200).send('Welcome to the secret space!')
});

// --------------- DELETE ROUTE ---------------
routes.delete('/delete', bearer, async (req, res, next) => {
  const deletedUser = await Users.findByIdAndDelete(req.user._id)
  res.status(200).send(deletedUser)
});

module.exports = routes;
