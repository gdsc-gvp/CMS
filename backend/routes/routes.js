const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { getMain, getClub, getTeam, createClub, postEvent, signUp, signIn, addRole } = require('../controller/controller');
router.use(express.json());
const SECRET_KEY = "hello";
module.exports = router;

// GET REQUESTS

router.get('/getMain', getMain);

router.get('/getClub/:clubId', getClub);

router.get('/getTeam/:clubId', getTeam);


// POST REQUESTS

router.post('/createClub', createClub);

router.post('/postEvent/:clubPublished', postEvent);

router.post('/signUp', signUp);

router.post('/signin', signIn);

router.post('/addRole', addRole);