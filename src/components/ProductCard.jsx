import { motion } from 'framer-motion'
import { FaShoppingCart, FaInfoCircle } from 'react-icons/fa'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product, onInquiry, index }) => {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.stopPropagation()
    addToCart(product)
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group relative bg-gradient-to-br from-steel-gray/50 to-metal-dark/50 rounded-xl overflow-hidden metal-border backdrop-blur-sm"
    >
      {/* 圖片容器 */}
      <div className="relative h-64 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-metal-silver/20 to-graphite-blue/20 flex items-center justify-center">
          {/* 佔位圖片 - 實際專案中可替換為真實圖片 */}
          <div className="text-6xl text-metal-silver/30">📺</div>
        </div>
        
        {/* Hover 光影效果 */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      </div>

      {/* 內容 */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-metal-silver mb-2">
          {product.name}
        </h3>
        
        <div className="space-y-2 mb-4 text-sm text-gray-300">
          {product.specs.map((spec, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <FaInfoCircle className="text-metal-silver/50" />
              <span>{spec}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="text-xs text-gray-400 mb-1">價格</p>
            <p className="text-2xl font-bold text-metal-silver">
              NT$ {product.price.toLocaleString()}
            </p>
          </div>
          
          <div className="flex gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleAddToCart}
              className="px-4 py-2 bg-gradient-to-r from-metal-silver to-gray-300 text-metal-dark font-semibold rounded-lg metal-border hover:shadow-lg transition-all duration-300 flex items-center gap-2"
            >
              <FaShoppingCart />
              加入購物車
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onInquiry(product)}
              className="px-4 py-2 bg-white/10 text-metal-silver font-semibold rounded-lg border border-metal-silver/30 hover:bg-white/20 transition-all duration-300"
            >
              詢價
            </motion.button>
          </div>
        </div>
      </div>

      {/* 裝飾邊框光效 */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-xl border-2 border-metal-silver/50 shadow-[0_0_20px_rgba(192,192,192,0.3)]"></div>
      </div>
    </motion.div>
  )
}

export default ProductCard

