import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Tours } from './components/Tours'
import { Footer } from './components/Footer'

function App() {
  

  return (
    <div className='bg-gradient-to-r from-indigo-900 to-indigo-400 min-h-screen flex flex-col items-center justify-center'>
      <Header className=""/>
      <Tours className="flex-1"/>
      <Footer className=""/>
    </div>
  )
}

export default App
