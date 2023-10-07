const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { getMain, getClub, createClub, postEvent, signUp, signIn } = require('../controller/controller');
router.use(express.json());
const SECRET_KEY = "hello";
module.exports = router;

// GET REQUESTS

router.get('/getMain', getMain);

router.get('/getClub/:clubId', getClub);



// POST REQUESTS

router.post('/createClub', createClub);

router.post('/postEvent/:clubPublished', postEvent);

router.post('/signUp', signUp);

router.post('/signin', signIn);