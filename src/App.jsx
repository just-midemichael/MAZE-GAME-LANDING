import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './layouts/header/Header'
import { Body } from './layouts/body/Body'
import { Footer } from './layouts/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Body/>
     <Footer/>
    </>
  )
}

export default App
