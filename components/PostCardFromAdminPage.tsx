import React from 'react';
import { Col, CollapsibleItem, Row } from 'react-materialize';
import { AttachmentFilePin } from "./AttachmentPin";

export const PostCardFromAdminPage = ({ post, selected, addPostToSelected }) => {
    const onBookmarkClick = (event) => {
        event.stopPropagation();
        addPostToSelected(post._id);
    };
    let authorNameAfterCheckAnauthorisedUser;
    if (post.authorName === 'АнонимБезРегистрации ') {
        if (!post.additionalInfo.hasOwnProperty('name') || post.additionalInfo?.name == '') {
            authorNameAfterCheckAnauthorisedUser = 'Анонимно';
        } else {
            authorNameAfterCheckAnauthorisedUser = post.additionalInfo.name;
        }

    } else {
        authorNameAfterCheckAnauthorisedUser = post.authorName;
    }

    return (
        <CollapsibleItem
            expanded={false}
            header={
                <Row>
                    <Col s={1} onClick={onBookmarkClick}>
                        {selected ? <i className="material-icons red-text" >bookmark</i>
                            : <i className="material-icons" >bookmark_border</i>}

                    </Col>
                    <Col s={9}>
                        {post.proposal}
                    </Col>
                    <Col s={2}>
                        
                        {post.status === 'old' ?
                            <span className="new badge red" data-badge-caption="">{post.voteDecision}</span> :
                            <span className="new badge" data-badge-caption="">{post.status}</span>}
                    </Col>
                </Row>
            }
            onSelect={() => { }}
            node="div"

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