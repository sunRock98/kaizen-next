import React, { useEffect, useState, useContext } from "react";
import { Modal, Button, Form, Checkbox, Input } from "antd";

import { AuthContext } from "../AuthContextProvider/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import { useMessage } from "../../hooks/message.hook";
import { UserType } from "../../models/User";
import styles from "./Login.module.scss";

export const LoginComponent = () => {
  const { loading, error, request, clearError } = useHttp();

  const message = useMessage();
  const { login } = useContext(AuthContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    message(error, "red");
    clearError();
  }, [error, message, clearError]);

  const loginHandler = async ({ email, password }) => {
    try {
      const { data }: { data: UserType } = await request("api/login", "POST", {
        email,
        password,
      });

      login(data);
    } catch (e) {}
  };

  return (
    <>
      <Button
        className={styles.login_button}
        shape="round"
        size="large"
        type="primary"
        onClick={showModal}
      >
        Вход
      </Button>
      <Modal
        className="modalStyle"
        title="Вход"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[<div style={{ height: "2rem" }}></div>]}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={loginHandler}
          autoComplete="off"
        >
          <Form.Item name="email" className={styles.input}>
            <Input width={24} placeholder="E-mail" className={styles.input} />
          </Form.Item>

          <Form.Item name="password">
            <Input.Password placeholder="Пароль" className={styles.input} />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="link" color="purple">
              Забыли пароль?
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              disabled={loading}
              htmlType="submit"
              className={styles.submit}
            >
              ВОЙТИ
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
