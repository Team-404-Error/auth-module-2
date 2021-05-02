'use strict';

// =============== 3RD PARTY DEPENDENCIES ===============
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// =============== USER SCHEMA ===============
const users = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true},
  role: { type: String, require: true,  default: 'user', enum: ['user', 'admin']}
}, { toJSON: {virtuals: true}});

// =============== VIRTUALS ===============
users.virtual('token').get(function () {
  let tokenObject = {
    username: this.username,
  };
  return jwt.sign(tokenObject, process.env.SECRET);
});

users.virtual('capabilities').get(function () {
  let acl = {
    user: ['read', 'update'],
    admin: ['read', 'create', 'update', 'delete']
  };
  return acl[this.role];
});

users.pre('save', async function () {
  if(this.isModified('password')){
    this.password = await bcrypt.hash(this.password, 10)
  }
});

// =============== BASIC AUTHENTICATION ===============
users.statics.authenticateBasic = async function (username, password) {
  const user = await this.findOne({ username })
  if(!username) throw new Error('Invalid User')
  const valid = await bcrypt.compare(password, user.password)
  if (valid) { return user; }
  throw new Error('Invalid User');
}

// =============== BEARER AUTHENTICATION - TOKEN ===============
users.statics.authenticateWithToken = async function(token) {
  try {
    const parsedToken = jwt.verify(token, process.env.SECRET);
    const user = this.findOne({ username: parsedToken.username })
    if (user) { return user; }
    throw new Error('User not found');
  } catch (error){
    throw new Error(error.message)
  }
}

module.exports = mongoose.model('users', users)
