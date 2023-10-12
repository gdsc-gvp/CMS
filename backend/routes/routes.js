const express = require('express');
const router = express.Router();
const { getMain, getClub, getTeam, getPosts, createClub, postEvent, signUp, signIn, addRole, signInAsAdmin, updateClub, updatePost, updateRole, deletePost, deleteRole } = require('../controller/controller');
const authAdmin = require('../middleware/authAdmin');
router.use(express.json());
const SECRET_KEY = "hello";
module.exports = router;


// GET REQUESTS

router.get('/getMain', getMain);

router.get('/getClub/:clubId', getClub);

router.get('/getTeam/:clubId', getTeam);

router.get('/getPosts/:clubPublished', getPosts);


// POST REQUESTS

router.post('/createClub', createClub);

router.post('/signUp', signUp);

router.post('/signin', signIn);

router.post('/addRole', addRole);

router.post('/signInAsAdmin', signInAsAdmin);

router.post('/postEvent', authAdmin, postEvent);

router.post('/updateClub', authAdmin, updateClub);

router.post('/updatePost', authAdmin, updatePost);

router.post('/updateRole', authAdmin, updateRole);

router.post('/deletePost', authAdmin, deletePost);

router.post('/deleteRole', authAdmin, deleteRole);