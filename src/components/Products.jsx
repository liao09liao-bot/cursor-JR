import { motion } from 'framer-motion'
import { useProducts } from '../context/ProductContext'
import ProductCard from './ProductCard'

const Products = ({ onInquiry }) => {
  const { products } = useProducts()
  return (
    <section id="products" className="py-20 px-4 relative">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-metal-silver rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-graphite-blue rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 標題 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            產品展示
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-metal-silver to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            專業工業級品質，為您的家電提供最穩固的支撐
          </p>
        </motion.div>

        {/* 產品網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onInquiry={onInquiry}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products

