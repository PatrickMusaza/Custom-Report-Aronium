import { Card, Table, Space, Statistic, Progress } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const dataSource = [
  {
    key: '1',
    product: 'Product 1',
    sales: 1250,
    profit: 420,
    margin: '28%'
  },
  // Add more data...
];

const columns = [
  {
    title: 'Product',
    dataIndex: 'product',
    key: 'product',
  },
  {
    title: 'Sales',
    dataIndex: 'sales',
    key: 'sales',
    render: (text: { toLocaleString: () => any; }) => `$${text.toLocaleString()}`
  },
  {
    title: 'Profit',
    dataIndex: 'profit',
    key: 'profit',
    render: (text: { toLocaleString: () => any; }) => `$${text.toLocaleString()}`
  },
  {
    title: 'Margin',
    dataIndex: 'margin',
    key: 'margin',
    render: (text: string) => <Progress percent={parseInt(text)} size="small" status="active" />
  },
];

export default function ReportViewer() {
  return (
    <div>
      <Space size="large" style={{ marginBottom: '24px' }}>
        <Card bordered={false}>
          <Statistic title="Total Sales" value={12500} prefix="$" />
        </Card>
        <Card bordered={false}>
          <Statistic title="Total Profit" value={4200} prefix="$" />
        </Card>
        <Card bordered={false}>
          <Statistic title="Average Margin" value="28%" />
        </Card>
      </Space>
      
      <Table 
        dataSource={dataSource} 
        columns={columns} 
        bordered
        size="middle"
        loading={{
          spinning: false,
          indicator: <LoadingOutlined style={{ fontSize: 24 }} spin />
        }}
      />
    </div>
  );
}