// file exports

const ClubModel = require('../models/ClubModel');
const PostModel = require('../models/PostModel');
const StudentModel = require('../models/StudentModel');
const RolesModel = require('../models/RoleModel');

// package exports

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


/* ------------------------- GET REQUESTS ------------------------- */


// main page - clubs list and events list

const getMain = async (req, res) => {
  try {
    const clubData = await ClubModel.find();
    const postData = await PostModel.find();
    const copyPostData = [];
    for (const post of postData) {
      const copyPost = JSON.parse(JSON.stringify(post));
      const club = await ClubModel.findOne( { _id: post.clubId } );
      copyPost["clubName"] = club.clubName;
      copyPost["clubImage"] = club.clubImage;
      copyPostData.push(copyPost);
    }
    const data = {};
    data.clubData = clubData;
    data.postData = copyPostData;
    res.json(data);
  } catch(error) {
    res.status(500).json( { message: error.message } );
  }
}
/*
res : {
  clubData: [
    {
      _id: "sampleid123",
      clubName: "xyz",
      clubDescription: "sample desc"
    }, {}, {}, ...
  ],
  postData: [
    {
      _id: "sampleid123",
      postMessage: "sample message",
      likeCount: 20,
      clubId: "698643jkhsd8w8y7438",
      createdAt: 2023-10-08T14:00:18.025+00:00,
      updatedAt: 2023-10-08T14:00:18.025+00:00
    }, {}, {}, ...
  ]
}
*/


// club overview page

const getClub = async (req, res) => {
  try {
    clubId = req.params.clubId;
    const clubData = await ClubModel.findOne( { _id: clubId } );
    res.json(clubData);
  } catch(error) {
    res.status(500).json( { message: error.message } );
  }
}


// club Team / Roles page

const getTeam = async (req, res) => {
  try {
    clubId = req.params.clubId;
    const teamData = await RolesModel.find( { clubId: clubId } );
    let team = [];
    for (const role of teamData) {
      const student = await StudentModel.find( { _id: new mongoose.Types.ObjectId(role.studentId) } );
      team.push({
        roleId: role._id,
        roleName: role.roleName,
        studentName: student[0].name,
        profilePic: student[0].profile
      });
    } 
    res.json(team);
  } catch(error) {
    res.status(500).json( { message: error.message } );
  }
}


// club Posts page

const getPosts = async (req, res) => {
  try {
    clubId = req.params.clubId;
    const postsData = await PostModel.find( { clubId: clubId } );
    res.json(postsData);
  } catch(error) {
    res.status(500).json( { message: error.message } );
  }
}



/* ------------------------- POST REQUESTS ------------------------- */


// Super Secret Route create club

const createClub = async (req, res) => {
  const data = new ClubModel({
    clubName: req.body.clubName,
    clubDescription: req.body.clubDescription,
    clubImage: req.body.clubImage
  })
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch(error) {
    res.status(400).json( { message: error.message } );
  }
}


// sign up for registering new users

const signUp = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const profile = req.body.profile;
  try {
    const existingUser = await StudentModel.findOne( { email: email } );
    try {
      if (existingUser.password) {
        return res.status(400).json( { message: "User already exists" } );
      }
    } catch (error) {}
    let data = existingUser;
    
    if (existingUser) {
      const hashedPassword = await bcrypt.hash(password, 10);
      existingUser.name = name;
      existingUser.password = hashedPassword;
      existingUser.save();
      res.status(200).json( { message: "User Creation Successful" } )
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        data = new StudentModel({
          email: email,
          password: hashedPassword,
          name: name,
          profile: profile
        })
        try {
          const dataToSave = await data.save();
          res.status(200).json(dataToSave)
        } catch(error) {
          res.status(400).json( { message: error.message } )
        }
      }
    }
  catch (error) {
    res.status(500).json( { message: error.message } )
  }
}


// sign in for logging in

const signIn = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const existingUser = await StudentModel.findOne( { email:  email } );
    if (!existingUser) {
      return res.status(404).json( { message: "User not found" } );
    }
    if (existingUser && !existingUser.password) {
      return res.status(404).json( { message: "User not found" } );
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(400).json( { message: "invalid credentials" } );
    }
    const accessToken = jwt.sign( { existingUser }, 'privateKey' )
    return res.status(201).json( { accessToken: accessToken, user: existingUser } );
  } catch (error) {
    return res.status(500).json( { message: error.message } );
  }
}


// Most Powerful route sign in as Admin

const signInAsAdmin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const clubId = req.body.clubId;
  try {
    const existingUser = await StudentModel.findOne( { email:  email } )
    if (!existingUser) {
      return res.status(404).json( { message: "User not found" } );
    }
    if (existingUser && !existingUser.password) {
      return res.status(404).json( { message: "User not found" } );
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(400).json( { message: "invalid credentials" } );
    }
    const studentId = existingUser._id;
    const student = await RolesModel.find( { studentId: new mongoose.Types.ObjectId(studentId) } );
    let isAdmin = student[0].adminPrivilage && (student[0].clubId == clubId);
    if (!isAdmin) {
      return res.status(403).json( { message: "not a admin" } );
    }
    const accessToken = jwt.sign( { existingUser }, 'privateKey' )
    return res.status(201).json( { accessToken: accessToken, user: existingUser, clubId: clubId } );

  } catch (error) {
    return res.status(500).json( { message: error.message } );
  }
}


/* ----------------- ADMIN SPECIFIC POST REQUESTS -------------------- */


// // Overview Page Routes --->

const updateClub = async (req, res) => {
  const clubId = req.body.clubId;
  const newClubName = req.body.newClubName;
  const newClubDescription = req.body.newClubDescription;
  const newClubImage = req.body.newClubImage;
  const club = await ClubModel.findOne( { _id: clubId } );
  club.clubName = newClubName;
  club.clubDescription = newClubDescription;
  club.clubImage = newClubImage;
  club.save();
  res.json( { message: "club updated successfully" } );
}


// // Team Page Routes --->

const addRole = async (req, res) => {
  const name = req.body.name;
  const clubId = req.body.clubId;
  const email = req.body.email;
  const roleName = req.body.roleName;
  const adminPrivilage = req.body.adminPrivilage;
  const isAlreadyStudent = await StudentModel.find( { email: email } );
  if (!isAlreadyStudent[0]) {
    let data = new StudentModel({
      name: name,
      email: email
    })
    const dataToSave = await data.save();
  }
  const newStudent = await StudentModel.find( { email: email } );
  const studentId = newStudent[0];
  let data = new RolesModel({
    studentId: studentId,
    clubId: clubId,
    roleName: roleName,
    adminPrivilage: adminPrivilage
  })
  const dataToSave = await data.save();
  return res.status(200).json( { message: "role added successfully" } );
}

const updateRole = async (req, res) => {
  const roleId = req.body.roleId;
  const newRoleName = req.body.newRoleName;
  const newAdminPrivilage = req.body.newAdminPrivilage;
  const role = await RolesModel.findOne( { _id: roleId } );
  role.roleName = newRoleName;
  role.adminPrivilage = newAdminPrivilage;
  role.save();
  res.json( { message: "updated successfully" } );
}

const deleteRole = async (req, res) => {
  const roleId = req.body.roleId;
  const role = await RolesModel.deleteOne( { _id: roleId } );
  res.json( { message: "successfully deleted" } );
}


// // Events Page Routes --->

const postEvent = async (req, res) => {
  const data = new PostModel({
    clubId: req.body.clubId,
    postTitle: req.body.postTitle,
    postMessage: req.body.postMessage,
    likeCount: req.body.likeCount,
    postImage: req.body.postImage
  })
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  } catch(error) {
    res.status(400).json( { message: error.message } )
  }
}

const updatePost = async (req, res) => {
  const postId = req.body.postId;
  const newPostMessage = req.body.newPostMessage;
  const newPostTitle = req.body.newPostTitle;
  const newPostImage = req.body.newPostImage;
  const post = await PostModel.findOne( { _id: postId } );
  post.postMessage = newPostMessage;
  post.postTitle = newPostTitle;
  post.postImage = newPostImage;
  post.save();
  res.json( { message: "post updated successfull" } );
}

const deletePost = async (req, res) => {
  const postId = req.body.postId;
  const post = await PostModel.deleteOne( { _id: postId } );
  res.json( { message: "successfully deleted" } );
}

/* -------------------------------------------------------------- */

module.exports = { getMain, getClub, getTeam, getPosts, createClub, postEvent, signUp, signIn, addRole, signInAsAdmin, updateClub, updatePost, updateRole, deletePost, deleteRole };