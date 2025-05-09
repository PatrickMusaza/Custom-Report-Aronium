import { Card } from 'antd';
import DatabaseConfigForm from '../components/admin/DatabaseConfigForm';

export default function AdminDashboard() {
  return (
    <Card title="Admin Dashboard">
      <DatabaseConfigForm />
    </Card>
  );
}