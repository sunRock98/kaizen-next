import React from 'react';

export const SelectionBookmark = ({ selected, onBookmarkClick }) => {
    
    const clickHandler = (e) => {
        e.persist(); 
        e.nativeEvent.stopImmediatePropagation();
        e.stopPropagation();
        onBookmarkClick(e);
    }

    return (<>
        {selected ?
            <i className="material-icons red-text"
                onClick={clickHandler} >bookmark</i> :
            <i className="material-icons"
                onClick={clickHandler} >bookmark_border</i>}
    </>
    )
}