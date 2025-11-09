import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../../context/AuthContext'
import { FaTimes, FaUser, FaEnvelope, FaLock } from 'react-icons/fa'

const Register = ({ onClose, onSwitchToLogin }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const { register } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    
    if (!name || !email || !password || !confirmPassword) {
      setError('請填寫所有欄位')
      return
    }

    if (password !== confirmPassword) {
      setError('密碼不一致')
      return
    }

    if (password.length < 6) {
      setError('密碼長度至少 6 個字元')
      return
    }

    try {
      register(name, email, password)
      onClose()
    } catch (err) {
      setError('註冊失敗，請稍後再試')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-morphism rounded-2xl p-8 metal-border shadow-2xl w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-metal-silver">註冊</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-200 rounded-lg p-3 text-sm">
              {error}
            </div>
          )}

          <div>
            <label className="block text-metal-silver font-semibold mb-2 flex items-center gap-2">
              <FaUser />
              姓名
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-metal-silver/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-metal-silver focus:ring-2 focus:ring-metal-silver/50 transition-all"
              placeholder="請輸入姓名"
              required
            />
          </div>

          <div>
            <label className="block text-metal-silver font-semibold mb-2 flex items-center gap-2">
              <FaEnvelope />
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-metal-silver/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-metal-silver focus:ring-2 focus:ring-metal-silver/50 transition-all"
              placeholder="請輸入 Email"
              required
            />
          </div>

          <div>
            <label className="block text-metal-silver font-semibold mb-2 flex items-center gap-2">
              <FaLock />
              密碼
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-metal-silver/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-metal-silver focus:ring-2 focus:ring-metal-silver/50 transition-all"
              placeholder="至少 6 個字元"
              required
            />
          </div>

          <div>
            <label className="block text-metal-silver font-semibold mb-2 flex items-center gap-2">
              <FaLock />
              確認密碼
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-metal-silver/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-metal-silver focus:ring-2 focus:ring-metal-silver/50 transition-all"
              placeholder="請再次輸入密碼"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-metal-silver to-gray-300 text-metal-dark font-semibold rounded-lg metal-border hover:shadow-lg transition-all duration-300"
          >
            註冊
          </motion.button>
        </form>

        <div className="mt-4 text-center text-gray-400">
          <span>已有帳號？</span>
          <button
            onClick={onSwitchToLogin}
            className="text-metal-silver hover:text-white ml-2 font-semibold transition-colors"
          >
            立即登入
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Register

