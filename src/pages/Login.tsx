import { Card, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import useAuth from "../hooks/useAuth";

export default function Login() {
  const { signIn, loading } = useAuth();

  const onFinish = (values: any) => {
    signIn(values.username, values.password);
  };

  return (
    <div style={styles.divStyle}>
      <Card title="Report Generator Login" style={styles.cardStyle}>
        <Form onFinish={onFinish}>
          <Form.Item name="username" rules={[{ required: true }]}>
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            LOG IN
          </Button>
        </Form>
      </Card>
      {/* ... */}
    </div>
  );
}

const styles = {
  cardStyle: {
    width: 300,
    borderRadius: 8,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    background: "#fff",
    padding: 4,
  },
  divStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f0f2f5",
  },
};
