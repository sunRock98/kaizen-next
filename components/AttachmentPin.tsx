import React from 'react';

export const AttachmentFilePin = (postId, fileName) => {
    return (
        <a href={`/uploaded/${postId}/${fileName}`}
                                    download
                                    key={fileName}
                                >
                                    <i className="material-icons">attachment</i>
                                </a>
    )
}