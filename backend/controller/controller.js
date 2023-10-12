const ClubModel = require('../models/ClubModel');
const PostModel = require('../models/PostModel');
const StudentModel = require('../models/StudentModel');
const RolesModel = require('../models/RolesModel');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { log } = require('console');

// GET REQUESTS

const getMain = async (req, res) => {
  try {
    const clubData = await ClubModel.find();
    const postData = await PostModel.find();
    const data = {};
    data.clubData = clubData;
    data.postData = postData;
    res.json(data);
  } catch(error) {
    res.status(500).json( { message: error.message } );
  }
}

const getClub = async (req, res) => {
  try {
    clubId = req.params.clubId;
    const clubData = await ClubModel.find( { _id: clubId } );
    res.json(clubData[0]);
  } catch(error) {
    res.status(500).json( { message: error.message } );
  }
}

const getTeam = async (req, res) => {
  try {
    clubId = req.params.clubId;
    const teamData = await RolesModel.find( { clubId: clubId } );
    let team = [];
    for (const singleTeam of teamData) {
      const student = await StudentModel.find( { _id: new mongoose.Types.ObjectId(singleTeam.studentId) } );
      team.push({
        roleName: singleTeam.roleName,
        studentName: student[0].name
      });
    } 
    res.json(team);
  } catch(error) {
    res.status(500).json( { message: error.message } );
  }
}

const getPosts = async (req, res) => {
  try {
    clubPublished = req.params.clubPublished;
    const postsData = await PostModel.find( { clubPublished: clubPublished } );
    res.json(postsData[0]);
  } catch(error) {
    res.status(500).json( { message: error.message } );
  }
}



// POST REQUESTS

const createClub = async (req, res) => {
  const data = new ClubModel({
    clubName: req.body.clubName,
    clubDescription: req.body.clubDescription
  })

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch(error) {
    res.status(400).json( { message: error.message } );
  }
}

const signUp = async (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  
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
      console.log("updating passord");
      existingUser.name = name;
      existingUser.password = hashedPassword;
      existingUser.save();
      res.status(200).json( { message: "User Creation Successful" } )
      } else {
        const hashedPassword = await bcrypt.hash(password, 10);
        data = new StudentModel({
          email: email,
          password: hashedPassword,
          name: name
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
    console.log(`error ${error}`);
    res.status(500).json( { message: error.message } )
  }
}

const signIn = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

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

    const accessToken = jwt.sign( { existingUser }, 'privateKey' )
    return res.status(201).json( { accessToken: accessToken } );

  } catch (error) {
    return res.status(500).json( { message: error.message } );
  }
}

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
    console.log(studentId);
    const student = await RolesModel.find( { studentId: new mongoose.Types.ObjectId(studentId) } );
    let isAdmin = student[0].adminPrivilage && (student[0].clubId == clubId);
    if (!isAdmin) {
      return res.status(403).json( { message: "not a admin" } );
    }

    const accessToken = jwt.sign( { existingUser }, 'privateKey' )
    return res.status(201).json( { accessToken: accessToken } );

  } catch (error) {
    return res.status(500).json( { message: error.message } );
  }

}

const addRole = async (req, res) => {
  const name = req.body.name;
  const clubId = req.body.clubId;
  const email = req.body.email;
  const roleName = req.body.roleName;
  const adminPrivilage = req.body.adminPrivilage;

  const isAlreadyStudent = await StudentModel.find( { email: email } );
  console.log(isAlreadyStudent);
  if (!isAlreadyStudent[0]) {
    let data = new StudentModel({
      name: name,
      email: email
    })
    const dataToSave = await data.save();
    console.log(dataToSave);
  }
  
  const newStudent = await StudentModel.find( { email: email } );
  console.log(newStudent);
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

// Admin specific Routes

const updateClub = async (req, res) => {
  const clubId = req.body.clubId;
  const newClubName = req.body.newClubName;
  const newClubDescription = req.body.newClubDescription;

  const club = await ClubModel.find( { _id: clubId } );
  console.log(club);
  club[0].clubName = newClubName;
  club[0].clubDescription = newClubDescription;
  club[0].save();
  res.json( { message: "updated successfully" } );
}

const postEvent = async (req, res) => {
  const data = new PostModel({
    clubId: req.body.clubId,
    postMessage: req.body.postMessage,
    likeCount: req.body.likeCount
  })

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  } catch(error) {
    res.status(400).json( { message: error.message } )
  }
}


module.exports = { getMain, getClub, getTeam, getPosts, createClub, postEvent, signUp, signIn, addRole, signInAsAdmin, updateClub };