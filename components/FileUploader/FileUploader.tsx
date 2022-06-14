import { InboxOutlined } from "@ant-design/icons";
import { Form, Upload, UploadRequestOption } from "antd";
import { DraggerProps } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";
import React, { useState } from "react";

type Props = {
  files: UploadFile<{ name: string; url: string }>[];
};

export const FileUploader = () => {
  const [form] = Form.useForm();
  const values = form.getFieldsValue();

  const files: UploadFile<{ name: string; url: string }>[] =
    form.getFieldValue("fileList");
  //   const [fileList, setFileList] = useState<
  //     UploadFile<{ name: string; url: string }>[]
  //   >(files ?? []);

  const uploadFile: DraggerProps["customRequest"] = (uploadRequest) => {
    const { file, onSuccess, onError } = uploadRequest;
    const fr = new FileReader();
    fr.readAsArrayBuffer(file);
    fr.onload = (f) => {
      const url = process.env.NEXT_PUBLIC_GOOGLE_DRIVE; // <--- Please set the URL of Web Apps.

      const qs = new URLSearchParams({
        filename: file?.name,
        mimeType: file?.type,
      });
      const file = fetch(`${url}?${qs}`, {
        method: "POST",
        body: JSON.stringify([...new Int8Array(f.target.result)]),
      })
        .then((res) => {
          console.log({ res });
          return res.json();
        })
        .then((file) => {
          //   setFileList((prev) => [...prev, { ...file, status: "done" }]);
          onSuccess("Ok", file);
          form.setFieldsValue({ fileList: [...files, file] });
          //   form.setFieldsValue({ ...values, fileList: [...files, file] });
          console.log(file);
        }) // <--- You can retrieve the returned value here.
        .catch((err) => {
          onError(err);
        });
    };
  };

  return (
    <Upload.Dragger

      defaultFileList={files}
      name="fileList"
      onChange={(info) => {
        console.log("onChange", info.file);
      }}
      customRequest={uploadFile}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-hint">
        Сюда вы можете вложить или перетащить для наглядности фото, график или
        таблицу
      </p>
    </Upload.Dragger>
  );
};

FileUploader.displayName = "FileUploader";
