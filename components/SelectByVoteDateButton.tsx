// import React from 'react';
// import { Select } from "react-materialize";


// export const SelectByVoteDateButton = ({selectedVoteDate, postsGrouppedByDates, selectChangeHandler }) => {
//     let m = Object.keys(postsGrouppedByDates).sort((a, b) => {
//         const a1 = new Date(a).getTime();
//         const b1 = new Date(b).getTime();
//         return b1 - a1
//     });
    
//     return (
//         <Select
//             id="Select-9"
//             multiple={false}
//             name='voteDecision'
//             onChange={selectChangeHandler}
//             options={{
//                 // classes: 'roleSelection',
//                 dropdownOptions: {
//                     alignment: 'left',
//                     autoTrigger: true,
//                     closeOnClick: true,
//                     constrainWidth: true,
//                     coverTrigger: true,
//                     hover: false,
//                     inDuration: 150,
//                     onCloseEnd: null,
//                     onCloseStart: null,
//                     onOpenEnd: null,
//                     onOpenStart: null,
//                     outDuration: 250
//                 }
//             }}
//             value={selectedVoteDate}
//         ><option value='' disabled >По дате голосования</option>
//         <option value='all' >Все Проголосованные</option>
//             {m.map(date =>
//                 <option value={date} key={date} >{new Date(date).toLocaleString('ru', {
//              year: 'numeric',
//              month: 'numeric',
//             day: 'numeric',
//          })}</option>)}


//         </Select>
//     )
// }
export {};