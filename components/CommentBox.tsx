import React, { useState } from 'react';


export const CommentBox = ({ postId, postComment, postCommentChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    


    const changeHandler = (event) => {
        let val = event.target.value;
        postCommentChange(postId, val);
        
    }
    const commentClickHandler = (event) => {

        event.stopPropagation();
        event.preventDefault();
        
        if(!isOpen){

            const elem = document.createElement('div');
            elem.classList.add("modal-overlay");
            elem.style.cssText = 'z-index: 3; display: block; opacity: 0.5;';
            elem.addEventListener('click', closeCommentBox);
            document.body.appendChild(elem);
    
            setIsOpen(true);
        }else{
            closeCommentBox(event);
        }
        isOpen ? document.body.classList.remove('modal-open') : document.body.classList.add('modal-open');

    }

    function closeCommentBox(event) {
        document.body.classList.remove('modal-open');
        document.body.removeChild(event.target);
        setIsOpen(false);  
    }


    return (
        <>
            <i className="material-icons" onClick={(e) => { e.stopPropagation(); commentClickHandler(e) }}>comment</i>
            {isOpen && (
                
                    <div id={'dialogbox' + postId} style={{ ...styles.dialogbox }}>
                        <div style={{ ...styles.body }}>
                            <span style={{  ...styles.tip, ...styles.tipRight }} />
                            <textarea id={'comment' + postId}
                                className="materialize-textarea"
                                style={{ color: 'white' }}
                                value={postComment}
                                onChange={changeHandler}
                            />
                            <label htmlFor={'comment' + postId}>Comment</label>
                        </div>
                    </div>
               
            )}
        </>
    )
}


const styles = {

    dialogbox: {
        position: "absolute",
        top: "-1.5rem",
        left: "-13rem",
        transition: "all 1s linear",
        color: "papayawhip",
        zIndex: 4,
    },

    body: {
        position: "relative",
        maxWidth: "300px",
        height: "auto",
        margin: "20px 10px",
        padding: "5px",
        backgroundColor: "#302e2e",
        borderRadius: "3px",
        border: "0.1rem solid #302e2e",
        color: "papayawhip"
    },
    tipRight: {
        top: "10px",
        right: "-25px",
        borderTopColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "transparent",
    },

    tip: {
        width: "0px",
        height: "0px",
        position: "absolute",
        background: "transparent",
        border: "10px solid #302e2e",
        transition: "all 1s linear"
    }
};