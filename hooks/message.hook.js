import { notification } from "antd";

export const useMessage = () => {
  return (text, color) => {
    if (text) {
      return notification.error({
        message: text,
        description: "",
      });
    }
  };
};
