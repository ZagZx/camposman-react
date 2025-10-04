// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './styles/App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './pages/Index'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Index />
      <Footer />
    </>
  )
}