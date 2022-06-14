import React from 'react';
import { CollapsibleItem } from 'react-materialize';
import { AttachmentFilePin } from './AttachmentPin';
import { CommentBox } from './CommentBox';

export const PostCardFromVotingMemberPage = 
    ({post, vote, postLikeChange, postCommentChange, ...otherProps}) => {

    const starmarkClickHandler = (ev) => {
        ev.stopPropagation();
        postLikeChange(post._id, !vote.like);
        return;
     }

     let authorNameAfterCheckAnauthorisedUser;
     if(post.authorName === 'АнонимБезРегистрации '){
         if(!post.additionalInfo.hasOwnProperty('name') || post.additionalInfo?.name == ''){
            authorNameAfterCheckAnauthorisedUser =  'Анонимно';
         }else{
            authorNameAfterCheckAnauthorisedUser =  post.additionalInfo.name;
         }
        
     }else{
        authorNameAfterCheckAnauthorisedUser = post.authorName;
     }


    return (
        <CollapsibleItem
            expanded={false}
            header={
                <div className='row'>
                    <div className="col s1">
                        <i className="material-icons"  >bookmark_border</i>
                    </div>
                    <div className="col s9">
                        {post.proposal}
                    </div>
                    <div id='nopropogationfield' className="col s2" style={{ position: 'relative' }}>
                    {vote['like'] ?
                    <i className="material-icons red-text" style={{ fontSize: '2.2rem' }} onClick={starmarkClickHandler}>star</i>
                    :
                    <i className="material-icons" style={{ fontSize: '2.2rem' }} onClick={starmarkClickHandler}>star_border</i>
                    }
                        

                        <CommentBox
                            postId={post._id}
                            postComment={vote['comment']}
                            postCommentChange={postCommentChange}
                        />

                    </div>
                </div>
            }

            node="div"
            {...otherProps}
            
            
        >
            <table className="striped">
                <thead>
                    <tr>
                        <th>Автор</th>
                        <th>Нынешнее состояние</th>
                        <th>Предложение</th>
                        <th>Вложение</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{post.coauthor ? authorNameAfterCheckAnauthorisedUser + " и " + post.coauthor : authorNameAfterCheckAnauthorisedUser}</td>
                        <td>{post.todayState}</td>
                        <td>{post.proposal}</td>
                        <td>
                            <div className="col s1">
                                <small>
                                    {
                                        post.uploads && post.uploads.length !== 0 ?
                                            post.uploads.map((val) =>
                                                AttachmentFilePin(post._id, val))
                                            :
                                            "Нет вложений"
                                    }
                                </small>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </CollapsibleItem>
    )
}