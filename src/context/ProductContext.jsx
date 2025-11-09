import { createContext, useContext, useState, useEffect } from 'react'

const ProductContext = createContext()

export const useProducts = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider')
  }
  return context
}

// 預設商品資料
const defaultProducts = [
  {
    id: 1,
    name: '工業級電視壁掛架 55-75吋',
    specs: ['承重: 50kg', '可調角度: ±15°', '材質: 不鏽鋼'],
    price: 8990,
  },
  {
    id: 2,
    name: '重型電視落地架 65-85吋',
    specs: ['承重: 80kg', '高度可調', '材質: 碳鋼'],
    price: 12990,
  },
  {
    id: 3,
    name: '洗衣機防震底座 標準型',
    specs: ['適用: 10-15kg', '防震等級: 4級', '材質: 鋁合金'],
    price: 4990,
  },
  {
    id: 4,
    name: '洗衣機防震底座 重型',
    specs: ['適用: 15-25kg', '防震等級: 5級', '材質: 不鏽鋼'],
    price: 7990,
  },
  {
    id: 5,
    name: '電視伸縮旋轉架 32-55吋',
    specs: ['伸縮距離: 50cm', '旋轉角度: 180°', '材質: 不鏽鋼'],
    price: 6990,
  },
  {
    id: 6,
    name: '工業級電視吊掛系統',
    specs: ['適用: 75-100吋', '承重: 120kg', '材質: 碳鋼'],
    price: 19990,
  },
]

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // 從本地儲存載入商品
    const savedProducts = localStorage.getItem('products')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      setProducts(defaultProducts)
      localStorage.setItem('products', JSON.stringify(defaultProducts))
    }
  }, [])

  useEffect(() => {
    // 儲存商品到本地儲存
    if (products.length > 0) {
      localStorage.setItem('products', JSON.stringify(products))
    }
  }, [products])

  const addProduct = (productData) => {
    const newProduct = {
      id: Date.now(),
      ...productData,
    }
    setProducts((prev) => [...prev, newProduct])
  }

  const updateProduct = (id, productData) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === id ? { ...product, ...productData } : product))
    )
  }

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id))
  }

  const value = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
  }

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

