// import React, { useEffect, useState } from 'react';
// import ContentEditable from 'react-contenteditable';
// import { Select } from 'react-materialize';


// export const UserCardFromAdminPage = ({ user, handleEditUser, passwordReset }) => {
//     const [editActive, setEditActive] = useState(false);
//     const [userData, setUserData] = useState(user);


//     useEffect(() => {
//         let tooltips = document.querySelectorAll('.tooltipped');
//         let tooltipsInsts = window.M.Tooltip.init(tooltips);
//     }, [editActive]);


//     const editStartClickHandler = () => {
//         if (!editActive) {
//             setEditActive(true);
//         }
//     }

//     const editCancelClickHandler = () => {
//         if (editActive) {
//             setEditActive(false);
//             setUserData(user);
//             disableTooltips();
//         }
//     }

//     const disableTooltips = () => {
//         let tooltips = document.querySelectorAll('.tooltipped');
//         let tooltipsInsts = window.M.Tooltip.init(tooltips);
//         tooltipsInsts.forEach(inst => inst.destroy());
//     }

//     const sendEditedClickHandler = () => {
//         if (editActive) {
//             if (userData.name === user.name && userData.email === user.email && userData.role === user.role) {
//                 setEditActive(false);
//                 disableTooltips();
//                 return;
//             }
//             handleEditUser(userData);
//             setEditActive(false);
//             disableTooltips();
//         }
//     };

//     const passwordResetClickHandler = () => {
//         if (editActive) {
//             passwordReset(userData);
//             editCancelClickHandler();
//         }
//     }

//     const inputDataChangeHandler = (event) => {
//         const val = event.target.value;
//         setUserData({ ...userData, [event.currentTarget.attributes.name.value]: val });
//     }

//     const classAddOnEdit = (editActive) => {
//         if (editActive) {
//             return 'activeCursor tooltipped';
//         } else {
//             return null;
//         }
//     }





//     return (
//         <tr>
//             <td className='userEditTool'>
//                 <span className='activeCursor tooltipped'
//                     onClick={editStartClickHandler}
//                     disabled={editActive}
//                     data-position="bottom"
//                     data-tooltip="изменить">
//                     <i className="material-icons">edit</i>
//                 </span>
//                 <span className={classAddOnEdit(editActive)}
//                     onClick={sendEditedClickHandler}
//                     disabled={!editActive}
//                     data-position="bottom"
//                     data-tooltip="сохранить изменения">
//                     <i className={editActive ? "material-icons green-text" : "material-icons grey-text"}>assignment_turned_in</i>
//                 </span>
//                 <span onClick={editCancelClickHandler}
//                     disabled={!editActive}
//                     className={classAddOnEdit(editActive)}
//                     data-position="bottom"
//                     data-tooltip="отменить изменения">
//                     <i className={editActive ? "material-icons red-text" : "material-icons grey-text"}>cancel</i>
//                 </span>
//                 <span className={classAddOnEdit(editActive)}
//                     onClick={passwordResetClickHandler}
//                     disabled={!editActive}
//                     data-position="bottom"
//                     data-tooltip="сбросить пароль">
//                     <i className={editActive ? "material-icons red-text" : "material-icons grey-text"}>fingerprint</i>
//                 </span>

//             </td>
//             <td>{<ContentEditable
//                 html={userData.name} // innerHTML of the editable div
//                 disabled={!editActive}       // use true to disable editing
//                 onChange={inputDataChangeHandler} // handle innerHTML change
//                 name='name'
//                 style={editActive ?
//                     { whiteSpace: 'pre-line', wordBreak: 'break-word', border: '1px dashed black' } :
//                     { whiteSpace: 'pre-line', wordBreak: 'break-word' }}// Use a custom HTML tag (uses a div by default)
//             />}</td>


//             {editActive ?
//                 <td>
//                     <div className="input-field">

//                         <Select
//                             id="Select-9"
//                             multiple={false}
//                             name='role'
//                             onChange={inputDataChangeHandler}
//                             options={{
//                                 classes: 'roleSelection',
//                                 dropdownOptions: {
//                                     alignment: 'left',
//                                     autoTrigger: true,
//                                     closeOnClick: true,
//                                     constrainWidth: true,
//                                     coverTrigger: true,
//                                     hover: false,
//                                     inDuration: 150,
//                                     onCloseEnd: null,
//                                     onCloseStart: null,
//                                     onOpenEnd: null,
//                                     onOpenStart: null,
//                                     outDuration: 250
//                                 }
//                             }}
//                             value={userData.role}
//                         >

//                             <option value="user" >user</option>
//                             <option value="admin" >admin</option>
//                             <option value="committeeMember">committeeMember</option>
//                         </Select>
//                     </div>
//                 </td>
//                 :
//                 <td>{user.role}</td>}
//             <td>
//                 {<ContentEditable
//                     html={userData.email} // innerHTML of the editable div
//                     disabled={!editActive}       // use true to disable editing
//                     onChange={inputDataChangeHandler} // handle innerHTML change
//                     name='email'

//                     style={editActive ?
//                         { whiteSpace: 'pre-line', wordBreak: 'break-word', border: '1px dashed black' } :
//                         { whiteSpace: 'pre-line', wordBreak: 'break-word' }}// Use a custom HTML tag (uses a div by default)
//                 />}
//             </td>
//         </tr>
//     )
// }
export {};