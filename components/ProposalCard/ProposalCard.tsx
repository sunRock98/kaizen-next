import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import Paragraph from "antd/lib/typography/Paragraph";
import React, { useState, useEffect, useRef } from "react";
import ContentEditable from "react-contenteditable";
import { PostType } from "../../models/Post";
import { AttachmentFilePin } from "../AttachmentPin";
import styles from "./ProposalCard.module.scss";

type Props = {
  post: PostType;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};
export const ProposalCard = ({ post, onDelete, onEdit }: Props) => {
  const [editActive, setEditActiv] = useState(false);
  const [postState, setPostState] = useState(post);

  const deletePostHandler = () => {
    const decision = window.confirm("Вы уверены, что хотите удалить пост?");
    if (decision) {
      onDelete(postState._id);
    }
  };

  const clickEditPostHandler = () => {
    setEditActiv(true);
  };

  const onClickSendEditedPostHandler = () => {
    if (
      postState.proposal === post.proposal &&
      postState.todayState === post.todayState
    ) {
      setEditActiv(false);
      return;
    }
    onEdit(postState);
    setEditActiv(false);
  };

  const cancelEditionHandler = () => {
    setPostState(post);
    setEditActiv(false);
  };

  const todayStateChangeHandler = (event) => {
    let val = event.target.value;
    setPostState({ ...postState, todayState: val });
  };

  const proposalChangeHandler = (event) => {
    let val = event.target.value;
    setPostState({ ...postState, proposal: val });
  };

  return (
    <>
      <Card
        hoverable
        className={styles.card}
        cover={
          <div className={styles.card_proposal}>
            <Paragraph
              title={post.kaidzenArea.join(", ")}
              ellipsis={{ rows: 5 }}
            >
              {post.proposal}
            </Paragraph>
          </div>
        }
      >
        <Meta
          title={
            post.kaidzenArea.length > 0 ? post.kaidzenArea.join(", ") : "Общее"
          }
          description={
            <>
              Дата:{" "}
              {new Date(post.date).toLocaleDateString("ru", {
                dateStyle: "medium",
              })}
              <br />
              {post.coauthor && <>Соавтор: {post.coauthor}</>}
            </>
          }
        />
      </Card>
      {/* <div className="card blue-grey darken-1 z-depth-5 s12" id={postState._id}>
      <div className="card-content white-text row marginBottom_0px">
        <div className="right-align blue-grey-text text-lighten-5">
          <small>{new Date(postState.date).toLocaleDateString()}</small>
        </div>
        <div className="col s12">
          <div className="s12">
            <h6 className="center card-title col s6 mobile-title">
              Нынешнее состояние
            </h6>
            <h6 className="card-title center col s6 mobile-title">
              Предложение для улучшения
            </h6>
          </div>
          <div className="s12">
            <div className="s6 col">
              <div className="divider" />
            </div>
            <div className="s6 col">
              <div className="divider" />
            </div>
          </div>
          <div className="row s6 marginBottom_0px">
            <div className="input-field col s6 marginBottom_0px">
              <ContentEditable
                ref={ref}
                html={postState.todayState} // innerHTML of the editable div
                disabled={!editActive} // use true to disable editing
                onChange={todayStateChangeHandler} // handle innerHTML change
                name="todayState"
                className="left-align blue-grey-text text-lighten-5"
                style={
                  editActive
                    ? {
                        whiteSpace: "pre-line",
                        wordBreak: "break-word",
                        border: "1px dashed black",
                      }
                    : { whiteSpace: "pre-line", wordBreak: "break-word" }
                } // Use a custom HTML tag (uses a div by default)
              />
            </div>
            <div className="input-field col s6 marginBottom_0px">
              <ContentEditable
                html={postState.proposal} // innerHTML of the editable div
                disabled={!editActive} // use true to disable editing
                onChange={proposalChangeHandler} // handle innerHTML change
                name="proposal"
                className="left-align blue-grey-text text-lighten-5"
                style={
                  editActive
                    ? {
                        whiteSpace: "pre-line",
                        wordBreak: "break-word",
                        border: "1px dashed black",
                      }
                    : { whiteSpace: "pre-line", wordBreak: "break-word" }
                } // Use a custom HTML tag (uses a div by default)
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card-action">
        <div className="row">
          <div className="col l3 m6 s12 marginBottom_6px">
            <div className="col l6 s3">
              <button
                className="center-align btn btn-small red tooltipped"
                onClick={deletePostHandler}
                data-position="top"
                data-tooltip="удалить"
              >
                <i className="material-icons">delete</i>
              </button>
            </div>
            <div className="col l6 s3">
              <button
                className={
                  editActive
                    ? "center-align btn btn-small red disabled"
                    : "center-align btn btn-small red tooltipped"
                }
                onClick={clickEditPostHandler}
                data-position="top"
                data-tooltip="редактировать"
              >
                <i className="material-icons">edit</i>
              </button>
            </div>
            {editActive && (
              <>
                <div id={"okEdit" + postState._id} className="col l6 s3">
                  <button
                    className="center-align btn btn-small red tooltipped"
                    onClick={onClickSendEditedPostHandler}
                    data-position="buttom"
                    data-tooltip="сохранить"
                  >
                    <i className="material-icons">done</i>
                  </button>
                </div>
                <div id={"cancelEdit" + postState._id} className="col l6 s3 ">
                  <button
                    className="center-align btn btn-small red tooltipped"
                    onClick={cancelEditionHandler}
                    data-position="buttom"
                    data-tooltip="отменить изменения"
                  >
                    <i className="material-icons">cancel</i>
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="col l6 s12">
            {postState.kaidzenArea && postState.kaidzenArea.length !== 0 && (
              <small>
                {postState.kaidzenArea.map((val) => (
                  <div className="chip blue-grey lighten-4 s12" key={val}>
                    {val}
                  </div>
                ))}
              </small>
            )}
          </div>
          <div className="col l3 s12">
            {postState.uploads && postState.uploads.length !== 0 && (
              <small>
                {postState.uploads.map((val, ind) =>
                  AttachmentFilePin(post._id, val)
                )}
              </small>
            )}
          </div>
        </div>
      </div>
    </div> 
  );*/}
    </>
  );
};
