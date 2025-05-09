import axios from 'axios'

export const login = async (credentials: { username: string; password: string }) => {
  try {
    // Replace with your actual API endpoint
    const response = await axios.post('/api/auth/login', credentials)
    return response.data
  } catch (error) {
    throw error
  }
}