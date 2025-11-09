import { useState } from 'react'
import { AuthProvider } from './context/AuthContext'
import { ProductProvider } from './context/ProductContext'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  const handleScrollToProducts = () => {
    const productsSection = document.getElementById('products')
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleInquiry = (product) => {
    // 滾動至聯絡表單
    setTimeout(() => {
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 300)
  }

  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <div className="min-h-screen">
            <Navbar />
            <Hero onScrollToProducts={handleScrollToProducts} />
            <Products onInquiry={handleInquiry} />
            <About />
            <ContactForm />
            <Footer />
          </div>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  )
}

export default App

