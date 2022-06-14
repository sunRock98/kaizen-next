import jwt from "jsonwebtoken";
// import { getCookie } from "./workWithCookie";

import User from "../models/User";
//function which should check if request comes from logged in user
//which has 'auth-token' in header of request

// export const verifyTokenFromCookie = async function (req, res, next) {
//   console.log("verifyTokenFromCookie", req.header("cookie"));
//   const cookie = req.header("cookie");
//   if (!cookie) return res.redirect("/");
//   // const token = getCookie(cookie, "auth");

//   console.log(token);
//   if (!token) return res.status(401).send("Access Denied");

//   try {
//     const verified = jwt.verify(token, secret);
//     const user = await User.findOne({ _id: verified });
//     req.userRole = user.role;
//     console.log(user.role);
//     req.user = verified;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: "Invalid Token" });
//   }
// };

export const verifyAdmin = function (req, res, next) {
  if (req.userRole === "admin") {
    next();
  } else {
    res.status(400).json({ message: "You are not admin" });
  }
};

export const verifyVotingCommittee = function (req, res, next) {
  if (req.userRole === "committeeMember") {
    next();
  } else {
    res.status(400).json({ message: "You are not on the committee." });
  }
};
