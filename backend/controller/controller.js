const ClubModel = require('../models/ClubModel');
const PostModel = require('../models/PostModel');
const StudentModel = require('../models/StudentModel');
const RolesModel = require('../models/RolesModel');

const bcrypt = require('bcrypt');

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
    res.json(teamData[0]);
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

const postEvent = async (req, res) => {
  const data = new PostModel({
    clubPublished: req.params.clubPublished,
    clubName: req.body.clubName,
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
      res.status(404).json( { message: "User not found" } );
    }
    
    if (existingUser && !existingUser.password) {
      res.status(404).json( { message: "User not found" } );
    }

    const matchPassword = (password === existingUser.password)

    if (!matchPassword) {
      res.status(400).json( { message: "invalid credentials" } );
    }

    res.status(201).json( { name: existingUser.name } );

  } catch (error) {
    res.status(500).json( { message: "Server went wrong" } );
  }
}

const addRole = async (req, res) => {
  
}


module.exports = { getMain, getClub, getTeam, createClub, postEvent, signUp, signIn, addRole };