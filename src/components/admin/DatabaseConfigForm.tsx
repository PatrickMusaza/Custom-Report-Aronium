import { Form, Input, Button, Card } from 'antd';

export default function DatabaseConfigForm() {
  return (
    <Form layout="vertical">
      <Form.Item label="Database Host" name="host">
        <Input placeholder="localhost" />
      </Form.Item>
      <Form.Item label="Port" name="port">
        <Input placeholder="3306" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Save Configuration</Button>
      </Form.Item>
    </Form>
  );
}