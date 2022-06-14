// const express = require('express');
// const router = express.Router();
// const { verifyTokenFromCookie, verifyVotingCommittee, verifyAdmin } = require('../verifyToken');
// const Post = require('../models/Post');


// // router.get('/', verifyTokenFromCookie, verifyVotingCommittee, (req, res) => {
// //     res.header({ userId: req.user._id })
// //     res.render('votingPage');

// // })


// router.patch('/voting', verifyTokenFromCookie, verifyVotingCommittee, async (req, res) => {
//     const votedPosts = req.body;
//     const userId = req.user._id;


//     const votedPostsKeys = Object.keys(votedPosts);
//     await asyncForEach(votedPostsKeys, CB);
//     async function CB(key) {
//         const voteResultsUpdated = {
//             "userId": userId,
//             "vote": votedPosts[key]
//         }
//         const res = await Post.updateOne(
//             { _id: key, "voteResults.userId": userId },
//             { $set: { "voteResults.$": voteResultsUpdated } },
//         )


//         if (res.nModified === 0) {
//             await Post.updateOne(
//                 { _id: key, },
//                 { $addToSet: { "voteResults": voteResultsUpdated } },
//             )
//         }
//     }

//     res.status(200).json({ message: 'Ваш голос учтен. Спасибо, что делаете завод лучше.' });


// })

// async function asyncForEach(array, callback) {
//     for (let index = 0; index < array.length; index++) {
//         await callback(array[index]);
//     }
// }

// router.patch('/finalvote', verifyTokenFromCookie, verifyAdmin, async (req, res) => {
//     const votedPosts = req.body;
//     const votedPostsKeys = Object.keys(votedPosts);
//     try {
//         const todayDate = new Date();
//         await asyncForEach(votedPostsKeys, CB);
//         async function CB(postId) {
//             if (votedPosts[postId] !== 'перенос') {
//                 await Post.findByIdAndUpdate(postId, {
//                     voteDecision: votedPosts[postId],
//                     voteDate: todayDate,
//                     status: 'old'
//                     });
//             }

//         }

//         res.status(200).json({ message: 'Голосование завершено.' });
//     } catch (error) {
//         res.status(400).json({ message: 'Что-то пошло не так. Попробуйте заново.' })
//     }



// })

// module.exports = router;