// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const { validateReg, validateLogin } = require('../validation');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const path = require('path');
// const { response } = require('express');
// const config = require('config');



// router.post('/register', async (req, res) => {
//     console.log('someone trying to register');
   
//     const error = validateReg(req.body);
    
//     if (error) {
//         console.log(error.details[0].message);
//         return res.status(400).json({message: error.details[0].message});
//     }

//     //check if user already exists
//     const emailExist = await User.findOne({ email: req.body.email });
//     if (emailExist) return res.status(400).json({message: 'Такой Email уже зарегистрирован. Обратитесь к администратору.'});

//     //Hash password
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);

//     //create user in DB
//     const user = new User({
//         name: req.body.name,
//         email: req.body.email.toLowerCase(),
//         password: hashedPassword,
//         workPlace: req.body.workPlace,
//     });

//     try {
//         const savedUser = await user.save();

//         //create and assign JSOn token
//         const token = jwt.sign({ _id: user._id }, config.get('TOKEN_SECRET'));
//         res.header('auth-token', token);
//         res.header('userRole', user.role);
//         res.send(JSON.stringify(token));

//     } catch (error) {
//         res.status(400).json({message: error});
//     }

// })


// module.exports = router;