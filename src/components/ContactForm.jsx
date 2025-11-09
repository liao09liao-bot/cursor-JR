import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaUser, FaBuilding, FaPhone, FaComment } from 'react-icons/fa'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    contact: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // 這裡可以加入實際的表單提交邏輯
    console.log('表單資料:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', company: '', contact: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-metal-silver rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-graphite-blue rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* 標題 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            聯絡我們
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-metal-silver to-transparent mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">
            有任何問題或需求，歡迎與我們聯繫
          </p>
        </motion.div>

        {/* 表單 */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass-morphism rounded-2xl p-8 md:p-12 metal-border shadow-2xl space-y-6"
        >
          {/* 姓名 */}
          <div>
            <label className="block text-metal-silver font-semibold mb-2 flex items-center gap-2">
              <FaUser />
              姓名 *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-metal-silver/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-metal-silver focus:ring-2 focus:ring-metal-silver/50 transition-all"
              placeholder="請輸入您的姓名"
            />
          </div>

          {/* 公司 */}
          <div>
            <label className="block text-metal-silver font-semibold mb-2 flex items-center gap-2">
              <FaBuilding />
              公司名稱
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-metal-silver/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-metal-silver focus:ring-2 focus:ring-metal-silver/50 transition-all"
              placeholder="請輸入公司名稱（選填）"
            />
          </div>

          {/* 聯絡方式 */}
          <div>
            <label className="block text-metal-silver font-semibold mb-2 flex items-center gap-2">
              <FaPhone />
              聯絡方式 *
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-metal-silver/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-metal-silver focus:ring-2 focus:ring-metal-silver/50 transition-all"
              placeholder="電話或 Email"
            />
          </div>

          {/* 留言 */}
          <div>
            <label className="block text-metal-silver font-semibold mb-2 flex items-center gap-2">
              <FaComment />
              留言內容 *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 bg-white/10 border border-metal-silver/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-metal-silver focus:ring-2 focus:ring-metal-silver/50 transition-all resize-none"
              placeholder="請描述您的需求或問題..."
            />
          </div>

          {/* 提交按鈕 */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 bg-gradient-to-r from-metal-silver to-gray-300 text-metal-dark font-semibold text-lg rounded-lg metal-border hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <FaPaperPlane />
              送出詢問
            </span>
            <motion.div
              className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.form>

        {/* 成功提示 */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 glass-morphism rounded-lg px-8 py-4 metal-border shadow-2xl z-50"
          >
            <p className="text-metal-silver font-semibold text-lg">
              ✓ 您的詢問已送出，我們會盡快與您聯繫！
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ContactForm

