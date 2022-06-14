import React, { useCallback, useContext, useEffect, useState } from "react";
import { UsersContext } from "../../context/UsersContext";
import { useHttp } from "../../hooks/http.hook";
import { useMessage } from "../../hooks/message.hook";
import { PostCardFromAdminLastVotePage } from "../PostCardFromAdminLastVotePage";

export const AdminLastVotePage = () => {
  const [votingPosts, setVotingPosts] = useState([]);
  const [votesByUsers, setVotesByUsers] = useState({});
  const [voteMembersIsSeen, setVoteMembersIsSeen] = useState(true);
  const [finalVotes, setFinalVotes] = useState({});

  const { request, error, clearError } = useHttp();

  const { users } = useContext(UsersContext);

  const message = useMessage();

  const getVotingPosts = useCallback(async () => {
    try {
      const fetchedPosts = await request(
        "/api/post/getvotingposts",
        "GET",
        null,
        {}
      );
      const finalVotes = {};
      fetchedPosts.data.forEach((post) => {
        finalVotes[post._id] = post.voteDecision || "перенос";
        post["voteSum"] = post.voteResults.reduce((sum, vote) => {
          sum += +vote.vote.like;
          return sum;
        }, 0);
      });
      const sortedByMostVoted = fetchedPosts.data.sort(
        (a, b) => b.voteSum - a.voteSum
      );
      setFinalVotes(finalVotes);
      setVotingPosts(sortedByMostVoted);
    } catch (error) {}
  }, [setVotingPosts, request]);

  const getVotes = (posts) => {
    console.log("im getting votes");
    const votes = {};
    posts.forEach((post) => {
      post.voteResults.forEach(({ userId, vote }) => {
        if (votes[userId]) {
          votes[userId] = { ...votes[userId], [post._id]: vote };
        } else {
          votes[userId] = { [post._id]: vote };
        }
      });
    });
    return votes;
  };

  useEffect(() => {
    getVotingPosts();
  }, []);

  useEffect(() => {
    setVotesByUsers(getVotes(votingPosts));
  }, [votingPosts]);

  useEffect(() => {
    message(error, "red");
    clearError();
  }, [error, message, clearError]);

  const hideVotersButtonClickHandler = () => {
    setVoteMembersIsSeen((prev) => !prev);
  };

  const changeVoteHandler = (postId) => {
    return (result) => {
      setFinalVotes({ ...finalVotes, [postId]: result });
    };
  };

  const sendVoteResults = async () => {
    try {
      const res = await request(
        "../voting-page/finalvote",
        "PATCH",
        finalVotes,
        {}
      );
      message(res.data.message, "green");
      const todayDate = new Date();
      const postsOnVoting = [];
      votingPosts.forEach((post) => {
        const postId = post._id;
        postsOnVoting.push({
          ...post,
          voteDecision: finalVotes[postId],
          voteDate: Date.now(),
          status: finalVotes[postId] != "перенос" ? "old" : "на голосовании",
        });
      });

      import("../../hooks/saveToExcel").then(({ saveToExcel }) => {
        // console.log(saveToExcel);
        saveToExcel(
          postsOnVoting,
          `${todayDate.toLocaleDateString() + " "}голосование.xlsx`
        );
      });
    } catch (error) {}
  };

  return (
    <div className="votingBlock">
      <div className="container">
        <button
          className="btn waves-effect waves-light hideVotersButton"
          type="submit"
          name="action"
          onClick={hideVotersButtonClickHandler}
        >
          <span>
            {voteMembersIsSeen ? "СКРЫТЬ КОМИССИЮ" : "ПОКАЗАТЬ КОМИССИЮ"}
          </span>
        </button>
        <button
          className="btn waves-effect waves-light finishVoting"
          type="submit"
          name="action"
          onClick={sendVoteResults}
        >
          <span>Завершить голосование</span>
        </button>
      </div>
      <div className="table">
        {votingPosts.length !== 0 ? (
          <table className="votingTable">
            <thead>
              <tr className="votingPostsTableHeader">
                <th className="headerNameSurname">
                  Кто <br />
                  предложил
                </th>
                <th className="headerProposal">Как было</th>
                <th className="headerTodayState">Предложение</th>
                {voteMembersIsSeen &&
                  Object.keys(votesByUsers).map((member) => (
                    <th className="rotate voteMembers" key={member}>
                      <div>
                        <span>
                          {users.find((user) => user._id === member)["name"]}
                        </span>
                      </div>
                    </th>
                  ))}
                <th className="voteSum">Итоги</th>
                <th className="voteResult">Решение комиссии</th>
              </tr>
            </thead>
            <tbody className="votingPostsTable">
              {votingPosts.map((post) => (
                <PostCardFromAdminLastVotePage
                  key={post._id}
                  post={post}
                  voteDecision={finalVotes[post._id]}
                  votesByUsers={votesByUsers}
                  voteMembersIsSeen={voteMembersIsSeen}
                  changeVoteHandler={changeVoteHandler(post._id)}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <div className="center">Нет предложений для голосования</div>
        )}
      </div>
    </div>
  );
};
