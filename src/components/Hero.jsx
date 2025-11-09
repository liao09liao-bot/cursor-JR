import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'

const Hero = ({ onScrollToProducts }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景金屬質感 */}
      <div className="absolute inset-0 metal-texture opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-metal-dark/80 via-steel-gray/80 to-graphite-blue/80"></div>
      
      {/* 動態背景元素 */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(192, 192, 192, 0.1) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* 內容 */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8"
        >
          <h1 className="text-8xl md:text-9xl font-bold text-metal-silver mb-4 tracking-wider">
            JR
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-metal-silver to-transparent mx-auto"></div>
        </motion.div>

        {/* 標語 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl text-metal-silver mb-6 font-light tracking-wide"
        >
          工業級電視架與洗衣機底座專家
        </motion.p>

        {/* 主標題 */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-12 leading-tight"
        >
          專注於精密工業級
          <br />
          <span className="text-metal-silver">家電安裝配件</span>
        </motion.h2>

        {/* 按鈕 */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onScrollToProducts}
          className="group relative px-8 py-4 bg-gradient-to-r from-metal-silver to-gray-300 text-metal-dark font-semibold text-lg rounded-lg overflow-hidden metal-border hover:shadow-2xl transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-2">
            查看商品
            <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
          </span>
          <motion.div
            className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* 底部裝飾線 */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-metal-silver to-transparent"
      />
    </section>
  )
}

export default Hero

