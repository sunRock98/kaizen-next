// const express = require("express");
// const router = express.Router();
// const User = require("../models/User");
// const { validateLogin } = require("../validation");
// const { verifyTokenFromCookie } = require("../verifyToken");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const config = require("config");

// router.post("/login", async (req, res) => {
//   const error = validateLogin(req.body);
//   console.log(error);
//   if (error) {
//     return res.status(400).json({ message: error.details[0].message });
//   }

//   // console.log('<p>hapi/joi validateLogin passed</p>');

//   //check if email  exists in DB
//   const user = await User.findOne({ email: req.body.email.toLowerCase() });
//   if (!user)
//     return res.status(400).json({ message: "Email или пароль неверный." });

//   console.log("user found in DB");

//   //password checking
//   const validPass = await bcrypt.compare(req.body.password, user.password);
//   if (!validPass) return res.status(400).json({ message: "Неверный пароль" });

//   console.log("password check pass");

//   //create and assign JSOn token
//   const token = jwt.sign({ _id: user._id }, config.get("TOKEN_SECRET"));

//   // if(user.role == 'admin'){
//   //     res.header('isAdmin', true)
//   // } else{
//   //     res.header('isAdmin', false)
//   // }
//   res.header("userRole", user.role);
//   res.header({ userId: user._id });

//   res.status(200).header("auth-token", token).send(JSON.stringify(token));

//   console.log("token assigned");
// });

// router.get("/logout/:token", verifyTokenFromCookie, (req, res) => {
//   console.log("im loging out and deleting token2");
//   const token = req.params.postId;
//   discardToken(token);
//   // deleteCookie('myToken');
//   console.log("tried to clear cookie");
//   // res.redirect('/')
//   res.status(200).json({ message: "token discaarded you can leave" });
// });

// module.exports = router;
