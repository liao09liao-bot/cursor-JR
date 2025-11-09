import { motion } from 'framer-motion'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-4 border-t border-metal-silver/20">
      {/* 背景裝飾 */}
      <div className="absolute inset-0 bg-gradient-to-t from-metal-dark/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 公司資訊 */}
          <div>
            <h3 className="text-2xl font-bold text-metal-silver mb-4">JR Industrial Mounts</h3>
            <p className="text-gray-400 mb-4">
              工業級電視架與洗衣機底座專家
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-metal-silver hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-metal-silver hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-metal-silver hover:text-white transition-colors"
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>
          </div>

          {/* 快速連結 */}
          <div>
            <h4 className="text-metal-silver font-semibold mb-4">快速連結</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#products" className="hover:text-metal-silver transition-colors">
                  產品展示
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-metal-silver transition-colors">
                  品牌故事
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-metal-silver transition-colors">
                  聯絡我們
                </a>
              </li>
            </ul>
          </div>

          {/* 法律資訊 */}
          <div>
            <h4 className="text-metal-silver font-semibold mb-4">法律資訊</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-metal-silver transition-colors">
                  隱私權政策
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-metal-silver transition-colors">
                  服務條款
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 版權資訊 */}
        <div className="border-t border-metal-silver/20 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} JR — 工業級電視架與洗衣機底架。保留所有權利。
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

