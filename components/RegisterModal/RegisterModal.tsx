import React, { useEffect, useState, useContext } from "react";
import { Modal, Button, Input as TextInput, Form, Input } from "antd";
import styles from "./RegisterModal.module.scss";
import { AuthContext } from "../AuthContextProvider/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import { useMessage } from "../../hooks/message.hook";
import { RegisterationData } from "../../pages/api/register";

type FormValues = {
  name?: string;
  surname?: string;
  workPlace?: string;
  email?: string;
  password?: string;
};

const transformFormValues = ({
  name,
  surname,
  workPlace,
  email,
  password,
}: FormValues): RegisterationData => {
  return {
    password,
    name: (name ?? "") + " " + (surname ?? ""),
    email,
    workPlace,
  };
};

export const RegisterComponent = () => {
  const { loading, error, request, clearError } = useHttp();
  const message = useMessage();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { login } = useContext(AuthContext);

  useEffect(() => {
    message(error, "red");
    clearError();
  }, [error, message, clearError]);

  const handleSubmit = async (formValues) => {
    try {
      const { data } = await request(
        "/api/register",
        "POST",
        transformFormValues(formValues)
      );
      login(data);
    } catch (e) {}
  };
  const handleRegisterClick = () => {
    setIsModalVisible(true);
  };
  const handleModalCloseClick = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button
        onClick={handleRegisterClick}
        className={styles.register_button}
        type="link"
      >
        Регистрация
      </Button>
      <Modal
        className="modalStyle"
        title="РЕГИСТРАЦИЯ"
        visible={isModalVisible}
        onCancel={handleModalCloseClick}
        footer={[<div style={{ height: "2rem" }}></div>]}
      >
        <Form<FormValues>
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          autoComplete="off"
        >
          <Form.Item name="name" className={styles.input}>
            <Input
              autoCapitalize="true"
              width={24}
              placeholder="Имя"
              className={styles.input}
            />
          </Form.Item>

          <Form.Item name="surname">
            <Input
              autoCapitalize="true"
              placeholder="Фамилия"
              className={styles.input}
            />
          </Form.Item>

          <Form.Item name="workPlace">
            <Input placeholder="Подразделение" className={styles.input} />
          </Form.Item>

          <Form.Item name="email" className={styles.input}>
            <Input
              autoComplete="false"
              width={24}
              placeholder="E-mail"
              className={styles.input}
            />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password placeholder="Пароль" className={styles.input} />
          </Form.Item>
          <Form.Item>
            <Button
              disabled={loading}
              htmlType="submit"
              className={styles.submit}
            >
              Отправить
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
