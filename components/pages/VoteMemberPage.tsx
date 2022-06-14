import React, { useState, useCallback, useEffect, useContext } from "react";
import { Collapsible } from "react-materialize";
import { AuthContext } from "../AuthContextProvider/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import { useMessage } from "../../hooks/message.hook";
import { LoaderComp } from "../Loader";
import LogoutComponent from "../Logout.Comp";
import { PostCardFromVotingMemberPage } from "../PostCardFromVotingMemberPage";

export const VoteMemberPage = () => {
  const [votingPosts, setVotingPosts] = useState([]);
  const [myVotes, setMyVotes] = useState({});
  const [changed, setChanged] = useState(false);
  const { request, loading, error, clearError } = useHttp();
  const { userId } = useContext(AuthContext);
  const message = useMessage();

  const getLoggedMemberVotes = useCallback(
    (posts) => {
      let myVotes = {};
      posts.forEach((post) => {
        const voteIndex = post.voteResults
          ? post.voteResults.findIndex((vote) => vote.userId === userId)
          : -1;
        if (voteIndex >= 0) {
          myVotes[post._id] = post.voteResults[voteIndex].vote;
        } else {
          myVotes[post._id] = { comment: "", like: false };
        }
      });
      setMyVotes(myVotes);
    },
    [userId]
  );

  const getVotingPosts = useCallback(async () => {
    try {
      const fetchedPosts = await request("/api/post/getposts", "GET", null, {});
      getLoggedMemberVotes(fetchedPosts.data);
      setVotingPosts(fetchedPosts.data);
    } catch (error) {}
  }, [setVotingPosts, request, getLoggedMemberVotes]);

  useEffect(() => {
    getVotingPosts();
  }, []);

  setInterval(() => {
    if (changed) {
      try {
        request("voting-page/voting", "PATCH", myVotes, {});
        setChanged(false);
      } catch (error) {}
    }
  }, 30000);

  useEffect(() => {
    message(error, "red");
    clearError();
  }, [error, message, clearError]);

  const postLikeChange = (postId, like) => {
    const currentComment = myVotes[postId].comment;
    setMyVotes({
      ...myVotes,
      [postId]: { comment: currentComment, like: like },
    });
    setChanged(true);
  };

  const postCommentChange = (postId, comment) => {
    const currentLike = myVotes[postId].like;
    setMyVotes({
      ...myVotes,
      [postId]: { comment: comment, like: currentLike },
    });
    setChanged(true);
  };

  const finishVotingClickHandle = async () => {
    try {
      const response = await request(
        "voting-page/voting",
        "PATCH",
        myVotes,
        {}
      );
      message(response.data.message, "green");
      setChanged(false);
    } catch (error) {}
  };

  return loading ? (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        marginTop: "10%",
      }}
    >
      <LoaderComp />
    </div>
  ) : (
    <div>
      <div>
        <div className="container">
          <h3 className="center">Голосование</h3>
          <button
            className="btn waves-effect waves-light sendVoteResultButton "
            type="submit"
            name="action"
            onClick={finishVotingClickHandle}
          >
            <i className="material-icons right">gavel</i>Завершить голосование.
          </button>
        </div>
        <div className=" container">
          <Collapsible accordion onSelect={() => {}}>
            {votingPosts.map((post) => (
              <PostCardFromVotingMemberPage
                key={post._id}
                post={post}
                vote={myVotes[post._id]}
                postLikeChange={postLikeChange}
                postCommentChange={postCommentChange}
              />
            ))}
          </Collapsible>
        </div>
      </div>
      <div className="fixed-action-btn col">
        <LogoutComponent />
      </div>
    </div>
  );
};

export default VoteMemberPage;
