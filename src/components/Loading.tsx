import { Spin } from 'antd';

interface LoadingProps {
  fullScreen?: boolean;
}

export default function Loading({ fullScreen = false }: LoadingProps) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: fullScreen ? '100vh' : '100%'
    }}>
      <Spin size="large" />
    </div>
  );
}