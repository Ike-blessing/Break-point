import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="w-screen h-screen p-0 m-0 bg-black flex sm:flex-row lg:flex-col justify-items-center items-center">
<div className="w-64 h-64 bg-blue-200"></div>
<div className="w-64 h-64 bg-blue-400"></div>
<div className="w-64 h-64 bg-blue-600"></div>
<div className="w-64 h-64 bg-blue-800"></div>
   </div>
  )
}

export default App
