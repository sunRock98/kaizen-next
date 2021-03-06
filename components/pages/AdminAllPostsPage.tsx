// import React, { useCallback, useEffect, useState } from "react";
// import { Collapsible } from "react-materialize";
// import { useHttp } from "../../hooks/http.hook";
// import { useMessage } from "../../hooks/message.hook";
// import { LoaderComp } from "../Loader";
// import { PostCardFromAdminPage } from "../PostCardFromAdminPage";
// import { SelectByVoteDateButton } from "../SelectByVoteDateButton";

// const SaveToExcelButton = React.lazy(() => import("../SaveToExcelButton"));

// export const AdminAllPostsPage = () => {
//   const [allPosts, setAllPosts] = useState([]);
//   const [selectedPosts, setSelectedPosts] = useState({ selected: 0 });
//   const [postsGrouppedByDates, setPostsGrouppedByDates] = useState({});
//   const [selectedVoteDate, setSelectedVoteDate] = useState("");

//   const { request, loading, error, clearError } = useHttp();

//   const message = useMessage();

//   const getAllPosts = useCallback(async () => {
//     try {
//       const fetchedPosts = await request("/api/post/getposts", "GET", null, {});
//       setAllPosts(fetchedPosts.data);
//       setPostsGrouppedByDates(groupPostsByVoteDates(fetchedPosts.data));
//     } catch (error) {}
//   }, [setAllPosts, request]);

//   const getNewPosts = useCallback(async () => {
//     try {
//       const fetchedNewPosts = await request(
//         "/api/post/getnewposts",
//         "GET",
//         null,
//         {}
//       );
//       setAllPosts(fetchedNewPosts.data);
//     } catch (error) {}
//   }, [setAllPosts, request, selectedVoteDate]);

//   useEffect(() => {
//     getAllPosts();
//   }, []);

//   useEffect(() => {
//     setSelectedPosts({ selected: 0 });
//   }, [allPosts]);

//   useEffect(() => {
//     message(error, "red");
//     clearError();
//   }, [error, message, clearError]);

//   useEffect(() => {
//     if (selectedVoteDate) {
//       if (selectedVoteDate === "all") {
//         const posts = Object.values(postsGrouppedByDates).reduce(
//           (prev, el) => [...prev, ...el],
//           []
//         );
//         setAllPosts(posts);
//       } else {
//         showPostsByVoteDate(selectedVoteDate);
//       }
//     }
//   }, [selectedVoteDate, postsGrouppedByDates]);

//   const groupPostsByVoteDates = (posts) => {
//     const postsGrouppedByDates = {};
//     posts.forEach((post) => {
//       if (post.status === "old") {
//         const voteDate = datePicker(post.voteDate);

//         if (postsGrouppedByDates.hasOwnProperty(voteDate)) {
//           postsGrouppedByDates[voteDate].push(post);
//         } else {
//           postsGrouppedByDates[voteDate] = [];
//           postsGrouppedByDates[voteDate].push(post);
//         }
//       }
//     });
//     return postsGrouppedByDates;
//   };

//   const datePicker = (date) => {
//     if (!date) {
//       return "";
//     }
//     let m = new Date(date);

//     const noTime = new Date(m.getFullYear(), m.getMonth(), m.getDate());

//     return noTime;
//   };

//   const addOrRemovePostToFromSelected = (postId) => {
//     const numberOfSelectedPosts = selectedPosts["selected"];
//     if (selectedPosts[postId]) {
//       setSelectedPosts({
//         ...selectedPosts,
//         [postId]: false,
//         selected: numberOfSelectedPosts - 1,
//       });
//       return;
//     }
//     setSelectedPosts({
//       ...selectedPosts,
//       [postId]: true,
//       selected: numberOfSelectedPosts + 1,
//     });
//   };

//   const selectAllPostsClickHandler = () => {
//     let adjustedSelectedPosts = { selected: 0 };
//     if (selectedPosts["selected"] === 0) {
//       adjustedSelectedPosts["selected"] = allPosts.length;
//       allPosts.forEach((post) => (adjustedSelectedPosts[post._id] = true));
//       setSelectedPosts(adjustedSelectedPosts);
//       return;
//     }
//     setSelectedPosts(adjustedSelectedPosts);
//   };

//   const deleteSelectedPostsClickHandler = async () => {
//     if (selectedPosts["selected"] === 0) {
//       message("???? ?????????????? ???? ???????????? ??????????????????????", "red");
//       return;
//     }
//     const decision = window.confirm(
//       "???? ??????????????, ?????? ???????????? ?????????????? ???????????????????? ???????????"
//     );
//     if (decision) {
//       let postShowen = [...allPosts];

//       await asyncForEach(Object.keys(selectedPosts), async (postId) => {
//         if (postId !== "selected" && selectedPosts[postId]) {
//           const response = await request(
//             `../api/post/${postId}`,
//             "DELETE",
//             null,
//             {}
//           );
//           message(response.data.message, "green");
//           postShowen = postShowen.filter((post) => post._id !== postId);
//         }
//       });
//       setAllPosts(postShowen);
//     }
//   };

//   async function asyncForEach(array, callback) {
//     for (let index = 0; index < array.length; index++) {
//       await callback(array[index]);
//     }
//   }

//   const sendToVoteSelectedPostsClickHandler = async () => {
//     if (selectedPosts["selected"] === 0) {
//       message("???? ?????????????? ???? ???????????? ??????????????????????", "red");
//       return;
//     }

//     const postStatusChange = {
//       status: "???? ??????????????????????",
//     };
//     let postShowen = [...allPosts];

//     await asyncForEach(Object.keys(selectedPosts), async (postId) => {
//       if (postId !== "selected" && selectedPosts[postId]) {
//         const postIndex = postShowen.findIndex((post) => post._id === postId);
//         if (postShowen[postIndex].status === "new") {
//           await request(`../api/post/${postId}`, "PATCH", postStatusChange, {});
//           postShowen[postIndex].status = "???? ??????????????????????";
//           message("?????????????????????? ?????? ?????????????????? ???????????? ????????????????", "green");
//         } else {
//           message("???? ?????????????????? ?????????????????? ???? ?????????????????????? ????????????????.", "red");
//         }
//       }
//     });
//     setAllPosts(postShowen);
//   };

//   const fetchNewPostsClickHandler = () => {
//     setSelectedVoteDate("");
//     getNewPosts();
//   };

//   const fetchAllPostsClickHandler = () => {
//     setSelectedVoteDate("");
//     getAllPosts();
//   };

//   const showPostsByVoteDate = useCallback(
//     (date) => {
//       setAllPosts(postsGrouppedByDates[date]);
//     },
//     [setAllPosts, postsGrouppedByDates]
//   );

//   const selectChangeHandler = (ev) => {
//     setSelectedVoteDate(ev.target.value);
//   };

//   return (
//     <div>
//       <div className="container">
//         <button
//           onClick={fetchAllPostsClickHandler}
//           className="btn waves-effect waves-light fetchNewButton "
//           type="submit"
//           name="action"
//           disabled={loading}
//         >
//           <i className="material-icons right">select_all</i>
//           ???????????????? ??????
//         </button>
//         <button
//           onClick={fetchNewPostsClickHandler}
//           className="btn waves-effect waves-light fetchNewButton "
//           type="submit"
//           name="action"
//           disabled={loading}
//         >
//           <i className="material-icons right">fiber_new</i>
//           ???????????????? ???????????? ??????????
//         </button>

//         <button
//           onClick={selectAllPostsClickHandler}
//           className="btn waves-effect waves-light highlightButton "
//           type="submit"
//           name="action"
//           disabled={loading}
//         >
//           {selectedPosts["selected"] !== 0 ? (
//             <>
//               <i className="material-icons right">highlight</i>
//               ???????????????? ??????????????????
//             </>
//           ) : (
//             <>
//               <i className="material-icons right">highlight</i>
//               ???????????????? ??????
//             </>
//           )}
//         </button>
//         <button
//           onClick={deleteSelectedPostsClickHandler}
//           className="btn waves-effect waves-light deleteSelectedButton "
//           type="submit"
//           name="action"
//           disabled={loading}
//         >
//           <i className="material-icons right">delete</i>
//           ?????????????? ????????????????????
//         </button>
//         <button
//           onClick={sendToVoteSelectedPostsClickHandler}
//           className="btn waves-effect waves-light sendToVoteButton "
//           type="submit"
//           name="action"
//           disabled={loading}
//         >
//           <i className="material-icons right">gavel</i>
//           ?????????????????? ???? ??????????????????????
//         </button>
//         <React.Suspense
//           fallback={
//             <button className="btn waves-effect waves-light">
//               <span>?????????????????? EXCEL</span>
//             </button>
//           }
//         >
//           <SaveToExcelButton
//             loading={loading}
//             data={allPosts}
//             filename={
//               selectedVoteDate
//                 ? `???????????????????? ?????????????????????? ${new Date(
//                     selectedVoteDate
//                   ).toLocaleString("ru", {
//                     year: "numeric",
//                     month: "numeric",
//                     day: "numeric",
//                   })}.xlsx`
//                 : "??????_??????????????_??????????????????????.xlsx"
//             }
//           />
//         </React.Suspense>

//         <div style={{ width: "25%" }}>
//           <SelectByVoteDateButton
//             selectedVoteDate={selectedVoteDate}
//             postsGrouppedByDates={postsGrouppedByDates}
//             selectChangeHandler={selectChangeHandler}
//           />
//         </div>
//       </div>
//       <div className=" container">
//         {loading ? (
//           <LoaderComp />
//         ) : (
//           <Collapsible accordion>
//             {allPosts.map((post) => (
//               <PostCardFromAdminPage
//                 key={post._id}
//                 post={post}
//                 selected={selectedPosts[post._id]}
//                 addPostToSelected={addOrRemovePostToFromSelected}
//               />
//             ))}
//           </Collapsible>
//         )}
//       </div>
//     </div>
//   );
// };
export {};