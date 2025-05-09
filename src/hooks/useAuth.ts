import { useState } from 'react'
import { login } from '../api/auth'
import { useNavigate } from 'react-router-dom'

export default function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signIn = async (username: string, password: string) => {
    setLoading(true)
    try {
      const userData = await login({ username, password })
      setUser(userData)
      navigate('/')
    } finally {
      setLoading(false)
    }
  }

  return { user, loading, signIn }
}