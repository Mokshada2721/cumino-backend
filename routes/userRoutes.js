require('dotenv').config();

const express = require('express');
const router = express.Router();
const { createUser, loginUser, getUser } = require('../controllers/userController');
const { addDetails } = require("../controllers/addUserDetails");

const auth = require('../controllers/auth'); // Import the auth middleware
const { addProject } = require('../controllers/projectController');

router.post('/signup', createUser);
router.post('/login', loginUser);
router.post('/addproject', auth, addProject);
router.get('/getuser', getUser);
router.post('/addi', addDetails); // Apply the auth middleware to protect this route

module.exports = router;
