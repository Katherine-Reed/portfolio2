import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Articles from './components/Articles'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <About />
      <Articles />
      <Footer />
    </>
  )
}

export default App
