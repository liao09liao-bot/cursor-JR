import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaTrash, FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'

const Cart = ({ onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useCart()

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
        className="glass-morphism rounded-2xl p-8 metal-border shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-metal-silver flex items-center gap-2">
            <FaShoppingCart />
            購物車
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12 text-gray-400">
            <FaShoppingCart size={64} className="mx-auto mb-4 opacity-30" />
            <p className="text-xl">購物車是空的</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="glass-morphism rounded-lg p-4 metal-border flex items-center gap-4"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-metal-silver/20 to-graphite-blue/20 rounded-lg flex items-center justify-center">
                      <span className="text-3xl">📺</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-metal-silver mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        NT$ {item.price.toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          -
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="border-t border-metal-silver/20 pt-4 mb-4">
              <div className="flex justify-between items-center text-xl font-bold text-metal-silver mb-4">
                <span>總計</span>
                <span>NT$ {getTotalPrice().toLocaleString()}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-gradient-to-r from-metal-silver to-gray-300 text-metal-dark font-semibold rounded-lg metal-border hover:shadow-lg transition-all duration-300"
              >
                前往結帳
              </motion.button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Cart

