import dbConnect from "../../lib/dbConnect";

import React, { useState, useCallback, useEffect, useContext } from "react";
import { userFromRequest } from "../../lib/auth";
import Post, { PostType } from "../../models/Post";
import { useMessage } from "../../hooks/message.hook";
import { useHttp } from "../../hooks/http.hook";
import { Layout, Menu, MenuProps, Space } from "antd";

import { ProposalCard } from "../../components/ProposalCard/ProposalCard";
import {
  DesktopOutlined,
  FileDoneOutlined,
  FileOutlined,
  ImportOutlined,
  LogoutOutlined,
  PieChartOutlined,
  PlusOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { AuthContext } from "../../components/AuthContextProvider/AuthContext";
import { CreateProposalDrawer } from "../../components/CreateProposalDrawer/CreateProposalDrawer";

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode
): ItemType {
  return {
    key,
    icon,
    label,
  };
}
enum MenuEnum {
  PROPOSALS,
  CREATE_PROPOSAL,
  CHANGE_PASSWORD,
  CHANGE_USER_DATA,
  LOGOUT,
}
const items: ItemType[] = [
  getItem("Мои Предложения", MenuEnum.PROPOSALS, <FileDoneOutlined />),
  getItem("Предложить улучшение", MenuEnum.CREATE_PROPOSAL, <PlusOutlined />),
  getItem("Сменить пароль", MenuEnum.CHANGE_PASSWORD, <PieChartOutlined />),
  getItem("Поменять данные", MenuEnum.CHANGE_USER_DATA, <UserOutlined />),
  getItem("Выйти", MenuEnum.LOGOUT, <LogoutOutlined />),
];

const PostsPage = ({ posts }: { posts: PostType[] }) => {
  const [userPosts, setUserPosts] = useState(posts);
  const { request, loading, error, clearError } = useHttp();
  const { logout } = useContext(AuthContext);

  const [visible, setVisible] = useState(false);

  const openCreateDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const logoutHandler = useCallback(async () => {
    await logout();
  }, [history, logout]);

  const message = useMessage();

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

  const handleMenuClick: MenuProps["onClick"] = (item) => {
    switch (item.key) {
      case String(MenuEnum.LOGOUT):
        logoutHandler();
        break;
      case String(MenuEnum.CREATE_PROPOSAL):
        openCreateDrawer();

      default:
        break;
    }
  };

  return (
    <>
      <Layout>
        <Layout.Sider width={"15%"} collapsible>
          <div className="container margin_bottom margin_top">
            <Image src={logo} />
          </div>
          <Menu
            onClick={handleMenuClick}
            theme="dark"
            defaultSelectedKeys={["0"]}
            mode="inline"
            items={items}
          />
        </Layout.Sider>
        <Layout>
          <Layout.Content>
            <div className="container margin_bottom"></div>
            <div className="container">
              <Space wrap size={30}>
                {posts.map((post) => (
                  <ProposalCard
                    onDelete={() => {}}
                    onEdit={() => {}}
                    post={post}
                  />
                ))}
              </Space>
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
      <CreateProposalDrawer visible={visible} onClose={onClose} />
    </>
  );
  //   return loading ? (
  //     <div
  //       style={{
  //         alignItems: "center",
  //         justifyContent: "center",
  //         display: "flex",
  //         marginTop: "10%",
  //       }}
  //     >
  //       <LoaderComp />
  //     </div>
  //   ) : (
  //     <div className="container">
  //   {
  /* <div>
        {userPosts.length !== 0 ? (
          userPosts.map((post) => (
            <PostCard
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
      </div> */
  //   }
  //     </div>
  //   );
};

export async function getServerSideProps({ req, params }) {
  await dbConnect();
  const user = await userFromRequest(req);
  if (user) {
    const result = await Post.find({
      author: "5fb2c1d8b3e8ea309048ee9a",
      // author: user._id,
    }).select("-status -voteResults");
    // const posts = result.map((doc) => {
    //   const post = doc.toObject();
    //   post._id = post._id.toString();
    //   return post;
    // });
    const posts = await JSON.parse(JSON.stringify(result));

    console.log(posts);

    return { props: { posts } };
  }

  return { props: { posts: [] } };
}

export default PostsPage;
