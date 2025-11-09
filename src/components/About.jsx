import { motion } from 'framer-motion'
import { FaIndustry, FaAward, FaTools, FaShieldAlt } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: <FaIndustry />,
      title: '專業製造',
      desc: '30年工業級製造經驗',
    },
    {
      icon: <FaAward />,
      title: '品質認證',
      desc: '通過多項國際品質認證',
    },
    {
      icon: <FaTools />,
      title: '精密工藝',
      desc: '採用先進CNC加工技術',
    },
    {
      icon: <FaShieldAlt />,
      title: '安全可靠',
      desc: '通過嚴格安全測試',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 relative">
      {/* 背景紋理 */}
      <div className="absolute inset-0 metal-texture opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-metal-dark/50 via-transparent to-graphite-blue/50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左側：文字內容 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              品牌故事
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-metal-silver to-transparent mb-8"></div>

            <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
              <p>
                JR Industrial Mounts 成立於 1990 年，專注於工業級電視架與洗衣機底座的研發與製造。
                我們深知家電安裝配件的重要性，因此始終堅持使用最高品質的材料與最精密的工藝。
              </p>
              <p>
                經過 30 多年的發展，我們已成為業界領先的專業製造商，產品廣泛應用於家庭、商業場所及工業環境。
                每一件產品都經過嚴格的品質檢驗，確保為客戶提供最安全、最可靠的解決方案。
              </p>
              <p>
                我們相信，專業的安裝配件不僅是功能性產品，更是對品質生活的承諾。
                選擇 JR，選擇專業與信賴。
              </p>
            </div>

            {/* 特色標籤 */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-morphism rounded-lg p-4 metal-border"
                >
                  <div className="text-3xl text-metal-silver mb-2">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-metal-silver mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 右側：圖片 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden metal-border shadow-2xl">
              {/* 佔位圖片 - 實際專案中可替換為真實工廠圖片 */}
              <div className="w-full h-full bg-gradient-to-br from-metal-silver/30 via-steel-gray/30 to-graphite-blue/30 flex items-center justify-center">
                <div className="text-8xl text-metal-silver/20">🏭</div>
              </div>
              
              {/* 光影層次效果 */}
              <div className="absolute inset-0 bg-gradient-to-t from-metal-dark/80 via-transparent to-transparent"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-metal-silver/10 rounded-full blur-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

