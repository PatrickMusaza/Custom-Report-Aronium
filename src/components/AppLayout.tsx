import { Layout, Menu } from 'antd'
import { PieChartOutlined, SettingOutlined } from '@ant-design/icons'
import { Outlet, useNavigate } from 'react-router-dom'

const { Sider, Content } = Layout

export default function AppLayout() {
  const navigate = useNavigate()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={250} theme="light">
        <div style={{ padding: '16px', fontWeight: 'bold' }}>Report Generator</div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['reports']}
          items={[
            { key: 'reports', icon: <PieChartOutlined />, label: 'Reports' },
            { key: 'admin', icon: <SettingOutlined />, label: 'Admin' }
          ]}
          onClick={({ key }) => navigate(key === 'reports' ? '/' : '/admin')}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: '16px' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}