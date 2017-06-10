const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/api/signup', function(req, res, next) {
  const {username, password} = req.body;
  if(!username|| !password) {
    return.red.status(422)
      .json(
        {
          error: 'Provide username and password'
        }
      );
  }
});
