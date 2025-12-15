import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./Component/Card.jsx"
import Card from './Component/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-[50px] bg-green-400 text-blue-600 mb-4"> Hello Tailwind and React</h1>
    <Card Name = "Vishal" btntxt="Read More"/> 
    <Card Name = "Vivek" />
    </>
    
    
  )
}

export default App
