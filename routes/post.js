// const express = require("express");
// const router = express.Router();
// const fs = require("fs");
// const { Date } = require("mongoose");
// const Post = require("../models/Post");
// const User = require("../models/User");
// const { verifyTokenFromCookie, verifyAdmin } = require("../verifyToken");

// // http://localhost:5000/api/post (GET)
// // router.get('/', verifyTokenFromCookie, (req, res) => {
// //     console.log('we are now at api/post');
// //     res.render('postPage');

// // })
// router.get("/getposts", verifyTokenFromCookie, async (req, res) => {
//   //   const dateStart = Date.now();
//   console.log("getposts start");
//   const userId = req.user._id;
//   let posts;

//   if (req.userRole == "admin") {
//     console.log("im admin");
//     posts = await Post.find({});
//     // console.log("post found", Date.now());
//     // console.log(dateStart - Date.now());
//   } else if (req.userRole == "committeeMember") {
//     posts = await Post.find({ status: "на голосовании" });
//     res.header({ userId: req.user._id });
//   } else {
//     posts = await Post.find({ author: userId }).select("-status -voteResults");
//   }

//   await (async () => {
//     await asyncForEach(posts, async (el) => {
//       const authorNam = await User.findById(el.author).select("name -_id");
//       if (authorNam) {
//         el["authorName"] = authorNam;
//         el.set("authorName", authorNam["name"], { strict: false });
//       } else {
//         el.set("authorName", "Аноним", { strict: false });
//       }
//     });
//   })();

//   res.status(200).json(posts);
// });

// async function asyncForEach(array, callback) {
//   for (let index = 0; index < array.length; index++) {
//     await callback(array[index]);
//   }
// }

// router.get(
//   "/getnewposts",
//   verifyTokenFromCookie,
//   verifyAdmin,
//   async (req, res) => {
//     const newPosts = await Post.find({ status: "new" });

//     await (async () => {
//       await asyncForEach(newPosts, async (el) => {
//         const authorNam = await User.findById(el.author).select("name -_id");
//         el["authorName"] = authorNam;
//         el.set("authorName", authorNam["name"], { strict: false });
//       });
//     })();

//     res.status(200).json(newPosts);
//   }
// );

// router.get(
//   "/getvotingposts",
//   verifyTokenFromCookie,
//   verifyAdmin,
//   async (req, res) => {
//     const newPosts = await Post.find({ status: "на голосовании" });

//     await (async () => {
//       await asyncForEach(newPosts, async (el) => {
//         const author = await User.findById(el.author).select(
//           "name department -_id"
//         );
//         el["authorName"] = author.name;
//         el["department"] = author.department;
//         el.set("authorName", author["name"], { strict: false });
//         el.set("department", author["department"], { strict: false });
//       });
//     })();

//     res.status(200).json(newPosts);
//   }
// );

// // http://localhost:5000/api/post (POST)
// router.post("/", verifyTokenFromCookie, async (req, res) => {
//   let postData;
//   let post;
//   const user = await User.findOne({ email: "анонимбезрегистрации@keas.ru" });
//   console.log(user._id);
//   console.log(req.user._id);
//   console.log(typeof req.user._id);
//   console.log(typeof req.user._id);
//   console.log(user._id == req.user._id);

//   try {
//     if (user._id == req.user._id) {
//       postData = {
//         additionalInfo: {
//           name: "Аноним",
//           workPlace: "",
//         },
//         todayState: req.body.todayState,
//         proposal: req.body.proposal,
//         author: user._id,
//         kaidzenArea: req.body.kaidzenArea,
//         uploads: req.body.uploads,
//         coauthor: req.body.coauthor,
//       };
//     } else {
//       postData = {
//         todayState: req.body.todayState,
//         proposal: req.body.proposal,
//         author: req.user._id,
//         kaidzenArea: req.body.kaidzenArea,
//         uploads: req.body.uploads,
//         coauthor: req.body.coauthor,
//       };
//     }
//     console.log(postData);
//     post = new Post(postData);
//     await post.save();
//     res.status(201);

//     const uploadsURL = req.body.uploads;
//     try {
//       fs.mkdirSync(`client/uploads/${post._id}`);
//       try {
//         uploadsURL.forEach((filename) => {
//           fs.renameSync(
//             "client/uploads/" + filename,
//             `client/uploads/${post._id}` + "/" + filename
//           );
//         });
//         res.json(post);
//       } catch (er) {
//         res.json({
//           message:
//             "Не смогли сохранить вложения" +
//             er +
//             " но мы сохранили ваше предложение",
//         });
//       }
//     } catch (er) {
//       res.json({
//         message:
//           "couldnt make folder with postId " +
//           er +
//           " но мы сохранили ваше предложение",
//       });
//     }
//   } catch (error) {
//     res.status(400).json({
//       message:
//         'МЫ не смогли сохранить ваш пост. Проверьте заполнено ли поле: "Предложение для улучшения"' +
//         error,
//     });
//   }
// });

// router.post("/noauth", async (req, res) => {
//   let postData;
//   let post;
//   const user = await User.findOne({ email: "анонимбезрегистрации@keas.ru" });
//   try {
//     postData = {
//       additionalInfo: {
//         name: req.body.name,
//         workPlace: req.body.workPlace,
//       },
//       todayState: req.body.todayState,
//       proposal: req.body.proposal,
//       author: user._id,
//       kaidzenArea: req.body.kaidzenArea,
//       uploads: req.body.uploads,
//       coauthor: req.body.coauthor,
//     };
//     console.log(postData);
//     post = new Post(postData);
//     await post.save();
//     res.status(201);

//     const uploadsURL = req.body.uploads;
//     try {
//       fs.mkdirSync(`client/uploads/${post._id}`);
//       try {
//         uploadsURL.forEach((filename) => {
//           fs.renameSync(
//             "client/uploads/" + filename,
//             `client/uploads/${post._id}` + "/" + filename
//           );
//         });
//         res.json(post);
//       } catch (er) {
//         res.json({
//           message:
//             "Не смогли сохранить вложения" +
//             er +
//             " но мы сохранили ваше предложение",
//         });
//       }
//     } catch (er) {
//       res.json({
//         message:
//           "couldnt make folder with postId " +
//           er +
//           " но мы сохранили ваше предложение",
//       });
//     }
//   } catch (error) {
//     res.status(400).json({
//       message:
//         'МЫ не смогли сохранить ваш пост. Проверьте заполнено ли поле: "Предложение для улучшения"' +
//         error,
//     });
//   }
// });

// // http://localhost:5000/api/post (DELETE)
// router.delete("/:postId", verifyTokenFromCookie, async (req, res) => {
//   try {
//     await Post.deleteOne({ _id: req.params.postId });
//     fs.rmdirSync(`client/uploads/${req.params.postId}`, { recursive: true });
//     res.status(200).json({ message: "Удалено" });
//   } catch (er) {
//     res
//       .status(400)
//       .json({ message: "Не получилось удалить. Попробуйте заново." });
//   }
// });

// router.get("/:token", verifyTokenFromCookie, (req, res) => {
//   res.header("auth-token", req.params.token);
//   res.redirect(`/api/post/user/${req.user._id}`);
// });
// router.get("/user/:userId", verifyTokenFromCookie, (req, res) => {
//   res.header("auth-token", req.params.token);
//   res.render("postPage");
// });

// router.patch("/:postId", verifyTokenFromCookie, async (req, res) => {
//   try {
//     await Post.findByIdAndUpdate(req.params.postId, req.body);
//     res.status(200).json({ message: "Ваше предложение отредактировано" });
//   } catch (er) {
//     res
//       .status(400)
//       .json({ message: "Не смог отредактировать. Попробуйте заново." });
//   }
// });

// module.exports = router;
