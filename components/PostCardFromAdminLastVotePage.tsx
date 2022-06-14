// import React, { useEffect } from 'react';
// import { Select } from 'react-materialize';


// export const PostCardFromAdminLastVotePage = ({ voteDecision, changeVoteHandler, post, votesByUsers, voteMembersIsSeen }) => {
//     let authorNameAfterCheckAnauthorisedUser = post.authorName === 'АнонимБезРегистрации '  ? post.additionalInfo.name : post.authorName;

//     useEffect(() => {
//         let tooltips = document.querySelectorAll('.tooltipped');
//         let tooltipsInsts = window.M.Tooltip.init(tooltips);
//     });

//     const disableTooltips = () => {
//         let tooltips = document.querySelectorAll('.tooltipped');
//         let tooltipsInsts = window.M.Tooltip.init(tooltips);
//         tooltipsInsts.forEach(inst => inst.destroy());
//     }

//     const inputDataChangeHandler = (event) => {
//         const val = event.target.value;
//         changeVoteHandler(val);
//     }


//     const votes = Object.values(votesByUsers).map(value => {
//         if (value[post._id]) {
//             return value[post._id]
//         }
//         return {
//             'like': false,
//             'comment': '',
//         }
//     })

//     return (<tr>
//         <td >{post.coauthor ? authorNameAfterCheckAnauthorisedUser + " и " + post.coauthor : post.authorName}</td>
//         <td >{post.todayState}</td>
//         <td >{post.proposal}</td>
//         {voteMembersIsSeen && votes.map((el, ind) => el.like ?
//             <td key={Object.keys(votesByUsers)[ind]} className="voteMembers">
//                 <i className="material-icons">add</i>
//                 {el.comment != '' && <i className="material-icons tooltipped"
//                     data-position="bottom"
//                     data-tooltip={el.comment}>mode_comment</i>}
//             </td> :
//             <td key={Object.keys(votesByUsers)[ind]} className="voteMembers">
//                 {el.comment != '' && <i className="material-icons tooltipped"
//                     data-position="bottom"
//                     data-tooltip={el.comment}>mode_comment</i>}
//             </td>)}
//         <td className="voteSum">{post.voteSum} / {votes.length}</td>
//         <td>
//             <div className="input-field ">
//                 <Select
//                     id="Select-9"
//                     multiple={false}
//                     name='voteDecision'
//                     onChange={inputDataChangeHandler}
//                     options={{
//                         // classes: 'roleSelection',
//                         dropdownOptions: {
//                             alignment: 'left',
//                             autoTrigger: true,
//                             closeOnClick: true,
//                             constrainWidth: true,
//                             coverTrigger: true,
//                             hover: false,
//                             inDuration: 150,
//                             onCloseEnd: null,
//                             onCloseStart: null,
//                             onOpenEnd: null,
//                             onOpenStart: null,
//                             outDuration: 250
//                         }
//                     }}
//                     value={voteDecision}
//                 >

//                     <option value="Не принято" >Не принято</option>
//                     <option value="1А" >1А</option>
//                     <option value="1Б">1Б</option>
//                     <option value="4 балла">4 балла</option>
//                     <option value="2 балла">2 балла</option>
//                     <option value="перенос">Перенести голосование</option>

//                 </Select>
//             </div>
//         </td>
//     </tr>)
// }
export {};