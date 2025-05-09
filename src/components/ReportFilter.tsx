import { Card, Form, DatePicker, Select, Button, Checkbox } from 'antd'
import { FilterOutlined } from '@ant-design/icons'

const { RangePicker } = DatePicker
const { Option } = Select


export default function ReportFilter({ onFilter }: { onFilter: (values: any) => void }) {
  const [form] = Form.useForm()

  return (
    <Card>
      <Form form={form} onFinish={onFilter}>
        <Form.Item label="Date Range" name="dateRange">
          <RangePicker style={{ width: '100%' }} />
        </Form.Item>
        
        <Form.Item label="Report Type" name="reportType">
          <Select placeholder="Select report type">
            <Option value="sales">Sales</Option>
            <Option value="products">Products</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" icon={<FilterOutlined />} htmlType="submit">
            Generate Report
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}