import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 檢查本地儲存的登入狀態
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    // 簡化版登入邏輯（實際專案應連接後端 API）
    const mockUser = {
      id: 1,
      email: email,
      name: '管理員',
      role: 'admin',
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
    return true
  }

  const register = (name, email, password) => {
    // 簡化版註冊邏輯（實際專案應連接後端 API）
    const newUser = {
      id: Date.now(),
      email: email,
      name: name,
      role: 'user',
    }
    setUser(newUser)
    localStorage.setItem('user', JSON.stringify(newUser))
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  const value = {
    user,
    login,
    register,
    logout,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

