import React, { useState } from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Space,
  Checkbox,
  Upload,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { FileUploader } from "../FileUploader/FileUploader";

const { Option } = Select;

type Props = {
  visible: boolean;
  onClose: () => void;
};
const kaidzenAreaList = [
  "Качество продукции",
  "Удовлетворенность клиента",
  "Стоимость",
  "Увеличение продаж",
  "Беспорядок",
  "Здоровье и безопасность",
  "Производительность",
  "Черезмерные запасы",
  "Окружающая среда",
];

export const CreateProposalDrawer: React.FC<Props> = ({ visible, onClose }) => {
  const [form] = Form.useForm();
  const handleSubmit = () => {
    const values = form.getFieldsValue();
    console.log({ values });
  };
  const getFile = (e) => {
    console.log("Upload event:", e);

    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  return (
    <Drawer
      forceRender
      title="Новое предложение по улучшению"
      width={720}
      onClose={onClose}
      visible={visible}
      bodyStyle={{ paddingBottom: 80 }}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      }
    >
      <Form form={form} layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              requiredMark
              name="todayState"
              label="Нынешнее состояние"
              rules={[
                {
                  message: "please enter url description",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Опишите нынешнее состояние ситуации"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              required
              requiredMark
              name="proposal"
              label="Предложение для улучшения"
              rules={[
                {
                  required: true,
                  message: "Обязательное поле",
                },
              ]}
            >
              <Input.TextArea
                rows={5}
                placeholder="Напишите ваше предложение по улучшению"
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item name="coauthor" label="Соавтор">
              <Input placeholder="Укажите соавтора, если он есть" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="kaidzenArea"
              label="К какой области относятся ваши предложения по улучшению?"
            >
              <Checkbox.Group style={{ height: "6rem", display: "flex" }}>
                <Space wrap direction="vertical">
                  {kaidzenAreaList.map((area) => (
                    <Checkbox value={area} key={area}>
                      {area}
                    </Checkbox>
                  ))}
                </Space>
              </Checkbox.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="fileList"
              // getValueFromEvent={getFile}
              // valuePropName="fileList"
            >
              <FileUploader />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Drawer>
  );
};

// const file = form.file.files[0];
//   const fr = new FileReader();
//   fr.readAsArrayBuffer(file);
//   fr.onload = f => {

//     const url = "https://script.google.com/macros/s/###/exec";  // <--- Please set the URL of Web Apps.

//     const qs = new URLSearchParams({filename: form.filename.value || file.name, mimeType: file.type});
//     fetch(`${url}?${qs}`, {method: "POST", body: JSON.stringify([...new Int8Array(f.target.result)])})
//     .then(res => res.json())
//     .then(e => console.log(e))  // <--- You can retrieve the returned value here.
//     .catch(err => console.log(err));
//   }
