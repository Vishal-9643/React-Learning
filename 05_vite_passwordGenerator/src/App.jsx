import { useState , useCallback ,useEffect,useRef} from 'react'


function App() {
  const [length , setLength] = useState(8) 
  const [numAllow , setNumAllow] = useState(false)
  const [charAllow , setCharAllow] = useState(false)
  const [Password , setPassword] = useState()

  const passRef = useRef(null)

  const passGenerator = useCallback( () => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllow) str += "0123456789";
    if(charAllow) str += "!@#$%&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)

  }, [length,numAllow,charAllow,setPassword])

  const copyPassword = () => {
    passRef.current.select();
    window.navigator.clipboard.writeText(Password)
  }

  useEffect(() => {
    passGenerator()
  }, [passGenerator , length, numAllow, charAllow ])

  return (
  <>
    <div className='w-full max-w-md mx-auto rounded-lg shadow-md my-8 px-4 bg-gray-700 text-orange-500 text-center'>
      <h1 className='text-xl font-bold mb-4 text-white mt-4'>Password Generator</h1>
      <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={Password} 
        placeholder='Password' 
        readOnly 
        className='w-full p-2 bg-white text-orange-500' 
        ref={passRef}
        />
        <button 
        onClick={copyPassword}
        className='bg-orange-500 hover:bg-orange-600 text-white px-4 py-2'>Copy</button>
      </div>
      <div className='flex text-sm items-center mb-4'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range" 
          min = {6}
          max = {60}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label  >Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1 ml-2'>
          <input type="checkbox" 
          defaultChecked = {numAllow}
          id='numberInput' 
          onChange={()=>{setNumAllow((prev)=>!prev)}}/>
          <label className='text-lg'>Numbers</label>
        </div>
         <div className='flex items-center gap-x-1 ml-2'>
          <input type="checkbox" 
          defaultChecked = {charAllow}
          id='charcterInput' 
          onChange={()=>{setCharAllow((prev)=>!prev)}}/>
          <label className='text-lg'>Character</label>
        </div>
    </div>
  </div>
  </>
    
  )
}

export default App
