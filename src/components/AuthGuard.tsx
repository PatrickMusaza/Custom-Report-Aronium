import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Loading from './Loading'

export default function AuthGuard() {
  const { user, loading } = useAuth()

  if (loading) return <Loading fullScreen />

  return user ? <Outlet /> : <Navigate to="/login" replace />
}