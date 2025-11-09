import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import { FaShoppingCart, FaUser, FaSignOutAlt, FaCog } from 'react-icons/fa'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Cart from './Cart/Cart'
import ProductManagement from './Admin/ProductManagement'

const Navbar = () => {
  const { user, logout } = useAuth()
  const { getCartItemCount } = useCart()
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showProductManagement, setShowProductManagement] = useState(false)

  const cartItemCount = getCartItemCount()

  const handleScrollTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 glass-morphism border-b border-metal-silver/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-metal-silver"
            >
              JR
            </motion.button>

            {/* 導航連結 */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => handleScrollTo('products')}
                className="text-gray-300 hover:text-metal-silver transition-colors"
              >
                產品展示
              </button>
              <button
                onClick={() => handleScrollTo('about')}
                className="text-gray-300 hover:text-metal-silver transition-colors"
              >
                品牌故事
              </button>
              <button
                onClick={() => handleScrollTo('contact')}
                className="text-gray-300 hover:text-metal-silver transition-colors"
              >
                聯絡我們
              </button>
            </div>

            {/* 右側按鈕 */}
            <div className="flex items-center gap-4">
              {/* 購物車 */}
              <motion.button
                onClick={() => setShowCart(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative text-metal-silver hover:text-white transition-colors"
              >
                <FaShoppingCart size={20} />
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </motion.button>

              {/* 使用者選單 */}
              {user ? (
                <div className="flex items-center gap-2">
                  {user.role === 'admin' && (
                    <motion.button
                      onClick={() => setShowProductManagement(true)}
                      whileHover={{ scale: 1.1 }}
                      className="text-metal-silver hover:text-white transition-colors"
                      title="商品管理"
                    >
                      <FaCog size={20} />
                    </motion.button>
                  )}
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <FaUser />
                    <span>{user.name}</span>
                  </div>
                  <motion.button
                    onClick={logout}
                    whileHover={{ scale: 1.1 }}
                    className="text-metal-silver hover:text-white transition-colors"
                    title="登出"
                  >
                    <FaSignOutAlt size={20} />
                  </motion.button>
                </div>
              ) : (
                <motion.button
                  onClick={() => setShowLogin(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-metal-silver to-gray-300 text-metal-dark font-semibold rounded-lg metal-border hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                >
                  <FaUser />
                  登入
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Modals */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onSwitchToRegister={() => {
            setShowLogin(false)
            setShowRegister(true)
          }}
        />
      )}
      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          onSwitchToLogin={() => {
            setShowRegister(false)
            setShowLogin(true)
          }}
        />
      )}
      {showCart && <Cart onClose={() => setShowCart(false)} />}
      {showProductManagement && (
        <ProductManagement onClose={() => setShowProductManagement(false)} />
      )}
    </>
  )
}

export default Navbar

