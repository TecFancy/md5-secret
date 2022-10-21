/**
 * @description 主内容区域
 */

import CryptoJS from "crypto-js";
import Clipboard from "clipboard";

import { useState } from "react";
import { Input, Button, Space, Descriptions, Form, message } from "antd";

import styles from "./index.module.scss";

const { TextArea } = Input;

interface FormValues {
  content?: string;
}

interface Result {
  lowercase?: string;
  uppercase?: string;
}

const Main = () => {
  const [formRef] = Form.useForm();

  const [result, setResult] = useState<Result>({
    lowercase: undefined,
    uppercase: undefined,
  });

  // 点我加密
  function handleClick() {
    const formValues: FormValues = formRef?.getFieldsValue();
    const content = formValues?.content?.trim();
    if (!content || !content?.length) {
      message.error("请输入要加密的内容");
      return;
    }
    const result = CryptoJS.MD5(content).toString();
    setResult({ lowercase: result, uppercase: result.toUpperCase() });
  }

  // 复制
  function handleCopy(type: "lowercase" | "uppercase") {
    Clipboard.copy(result[type] as string);
    message.success("复制成功");
  }

  return (
    <main className={styles.main}>
      <Form form={formRef} onFinish={handleClick}>
        <Form.Item label={null} name="content">
          <TextArea
            autoSize={{ minRows: 4, maxRows: 8 }}
            rows={4}
            placeholder="请输入要加密的内容"
          />
        </Form.Item>
      </Form>
      <Space size="small" className={styles.buttons}>
        <Button type="primary" onClick={handleClick}>
          点我加密
        </Button>
      </Space>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-6487844781006261"
        data-ad-slot="5879090324"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      <Descriptions
        bordered
        title="加密结果"
        layout="vertical"
        column={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2, xxl: 2 }}
      >
        <Descriptions.Item label="小写">
          <div className={styles.resultContent}>
            <code>{result?.lowercase || "-"}</code>
            {result?.lowercase && (
              <Button
                size="small"
                type="primary"
                onClick={() => handleCopy("lowercase")}
              >
                复制
              </Button>
            )}
          </div>
        </Descriptions.Item>
        <Descriptions.Item label="大写">
          <div className={styles.resultContent}>
            <code>{result?.uppercase || "-"}</code>
            {result?.uppercase && (
              <Button
                size="small"
                type="primary"
                onClick={() => handleCopy("uppercase")}
              >
                复制
              </Button>
            )}
          </div>
        </Descriptions.Item>
      </Descriptions>
      <div className={styles.bottomAd}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-6487844781006261"
          data-ad-slot="5879090324"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </main>
  );
};

export default Main;
