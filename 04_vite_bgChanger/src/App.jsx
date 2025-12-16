import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive')

  return (
   <div className="w-full h-screen duration-200"
   style={{backgroundColor : color}}>
    <div className='fixed flex flex-wrap justify-center top-12 px-3 inset-x-0'>
      <div className='flex flex-wrap justify-center rounded-3xl px-3 py-2 gap-3 bg-white shadow-lg'>
        <button 
        onClick={() => setColor("red")}
        className='outline-none px-4 py-2 rounded-full shadow-xl text-white' 
        style={{backgroundColor : "red"}}>Red</button>
        <button
        onClick={() => setColor("blue")}
        className='outline-none px-4 py-2 rounded-full shadow-xl text-white' 
        style={{backgroundColor : "blue"}}>Blue</button>
        <button 
        onClick={() => setColor("green")}
        className='outline-none px-4 py-2 rounded-full shadow-xl text-white' 
        style={{backgroundColor : "green"}}>Green</button>
        <button 
        onClick={() => setColor("pink")}
        className='outline-none px-4 py-2 rounded-full shadow-xl text-white' 
        style={{backgroundColor : "pink"}}>Pink</button>
        <button 
        onClick={() => setColor("orange")}
        className='outline-none px-4 py-2 rounded-full shadow-xl text-white' 
        style={{backgroundColor : "orange"}}>Orange</button>
        <button 
        onClick={() => setColor("white")}
        className='outline-none px-4 py-2 rounded-full shadow-xl text-black'
        style={{backgroundColor : "white"}}>White</button>
        <button
        onClick={() => setColor("grey")}
        className='outline-none px-4 py-2 rounded-full shadow-xl text-white' 
        style={{backgroundColor : "grey"}}>Grey</button>
        <button 
        onClick={() => setColor("black")}
        className='outline-none px-4 py-2 rounded-full shadow-xl text-white' 
        style={{backgroundColor : 'black'}}>Black</button>
      </div>
    </div>
   </div>
  )
}

export default App
