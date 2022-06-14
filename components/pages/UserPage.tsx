import React, { useState, useCallback, useEffect, useContext } from "react";
import { AuthContext } from "../AuthContextProvider/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import { useMessage } from "../../hooks/message.hook";
import { AddNewProposalModal } from "../AddProposal.Comp";
import { LoaderComp } from "../Loader";
import LogoutComponent from "../Logout.Comp";
import { ProposalCard } from "../ProposalCard/ProposalCard";

export const UserPage = () => {
  const [userPosts, setUserPosts] = useState([]);
  const { request, loading, error, clearError } = useHttp();
  const { token, userId } = useContext(AuthContext);
  const message = useMessage();

  const getUserPosts = useCallback(async () => {
    try {
      const fetchedPosts = await request("/api/post/getposts", "GET", null, {});
      setUserPosts(fetchedPosts.data);
    } catch (error) {}
  }, [setUserPosts, request, token]);

  useEffect(() => {
    getUserPosts();
  }, []);

  useEffect(() => {
    message(error, "red");
    clearError();
  }, [error, message, clearError]);

  const handleDelete = async (postId) => {
    try {
      const response = await request(`/api/post/${postId}`, "delete", null, {});
      message(response.data.message, "green");
      const posts = userPosts.filter((post) => post._id !== postId);
      setUserPosts(posts);
    } catch (error) {}
  };

  const handleAdd = (post) => {
    const posts = [...userPosts, post];
    setUserPosts(posts);
  };

  const handleEdit = async (post) => {
    try {
      const index = userPosts.findIndex(
        (postState) => postState._id === post._id
      );
      const posts = [
        ...userPosts.slice(0, index),
        post,
        ...userPosts.slice(index + 1),
      ];
      setUserPosts(posts);
      const response = await request(`/api/post/${post._id}`, "PATCH", post);
      message(response.data.message, "green");
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
    <div className="container">
      <div>
        {userPosts.length !== 0 ? (
          userPosts.map((post) => (
            <ProposalCard
              post={post}
              key={post._id}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))
        ) : (
          <div className="center" style={{ margin: "10%", fontSize: "10vh" }}>
            Постов пока нет{" "}
          </div>
        )}
      </div>
      <div className="fixed-action-btn col">
        <div className="col3">
          <AddNewProposalModal onAdd={handleAdd} />
        </div>
        <p />
        <LogoutComponent />
      </div>
    </div>
  );
};

export default UserPage;
