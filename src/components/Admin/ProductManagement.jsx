import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlus, FaEdit, FaTrash, FaTimes } from 'react-icons/fa'
import { useProducts } from '../../context/ProductContext'

const ProductManagement = ({ onClose }) => {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts()
  const [isEditing, setIsEditing] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    specs: ['', '', ''],
    price: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const productData = {
      name: formData.name,
      specs: formData.specs.filter((spec) => spec.trim() !== ''),
      price: parseInt(formData.price),
    }

    if (isEditing && editingProduct) {
      updateProduct(editingProduct.id, productData)
    } else {
      addProduct(productData)
    }

    resetForm()
  }

  const handleEdit = (product) => {
    setEditingProduct(product)
    setIsEditing(true)
    setFormData({
      name: product.name,
      specs: [...product.specs, '', ''].slice(0, 3),
      price: product.price.toString(),
    })
  }

  const handleDelete = (id) => {
    if (window.confirm('確定要刪除此商品嗎？')) {
      deleteProduct(id)
    }
  }

  const resetForm = () => {
    setIsEditing(false)
    setEditingProduct(null)
    setFormData({
      name: '',
      specs: ['', '', ''],
      price: '',
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-morphism rounded-2xl p-8 metal-border shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto my-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-metal-silver">商品管理</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* 表單 */}
        <form onSubmit={handleSubmit} className="mb-8 glass-morphism rounded-lg p-6 metal-border">
          <h3 className="text-xl font-semibold text-metal-silver mb-4">
            {isEditing ? '編輯商品' : '新增商品'}
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-metal-silver font-semibold mb-2">
                商品名稱
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-metal-silver/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-metal-silver focus:ring-2 focus:ring-metal-silver/50 transition-all"
                placeholder="請輸入商品名稱"
                required
              />
            </div>

            <div>
              <label className="block text-metal-silver font-semibold mb-2">
                規格（每行一個）
              </label>
              {formData.specs.map((spec, index) => (
                <input
                  key={index}
                  type="text"
                  value={spec}
                  onChange={(e) => {
                    const newSpecs = [...formData.specs]
                    newSpecs[index] = e.target.value
                    setFormData({ ...formData, specs: newSpecs })
                  }}
                  className="w-full px-4 py-2 mb-2 bg-white/10 border border-metal-silver/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-metal-silver focus:ring-2 focus:ring-metal-silver/50 transition-all"
                  placeholder={`規格 ${index + 1}`}
                />
              ))}
            </div>

            <div>
              <label className="block text-metal-silver font-semibold mb-2">
                價格
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-metal-silver/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-metal-silver focus:ring-2 focus:ring-metal-silver/50 transition-all"
                placeholder="請輸入價格"
                required
                min="0"
              />
            </div>

            <div className="flex gap-3">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 py-3 bg-gradient-to-r from-metal-silver to-gray-300 text-metal-dark font-semibold rounded-lg metal-border hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isEditing ? <FaEdit /> : <FaPlus />}
                {isEditing ? '更新商品' : '新增商品'}
              </motion.button>
              {isEditing && (
                <motion.button
                  type="button"
                  onClick={resetForm}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-metal-silver/30 hover:bg-white/20 transition-all"
                >
                  取消
                </motion.button>
              )}
            </div>
          </div>
        </form>

        {/* 商品列表 */}
        <div>
          <h3 className="text-xl font-semibold text-metal-silver mb-4">商品列表</h3>
          <div className="space-y-3">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-morphism rounded-lg p-4 metal-border flex items-center justify-between"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-metal-silver mb-1">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-400 mb-1">
                    {product.specs.join(' • ')}
                  </p>
                  <p className="text-metal-silver font-semibold">
                    NT$ {product.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleEdit(product)}
                    className="p-2 bg-blue-500/20 text-blue-300 rounded-lg hover:bg-blue-500/30 transition-colors"
                  >
                    <FaEdit />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleDelete(product.id)}
                    className="p-2 bg-red-500/20 text-red-300 rounded-lg hover:bg-red-500/30 transition-colors"
                  >
                    <FaTrash />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProductManagement

