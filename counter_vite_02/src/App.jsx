import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(5); // In this useState function return array in which 1st index hold value and 2nd index has function to do modification with value.

  // let counter = 5;
  
  const addValue = () => {
    counter = counter +1;
    if(counter > 20){
      counter = 20
    }
    setCounter(counter) // counter never increase its value beyond 20.
  }

  const subValue = () => {
    counter = counter -1;
    if(counter<0){
      counter = 0;
    }
    setCounter(counter) // counter never become negative.
  }

  return (
    <>
    <h1> React Counter Project </h1>
    <h2> Counter Value : {counter} </h2>

    <button
    onClick={addValue}
    >ADD VALUE</button>

    <button
    onClick={subValue}
    >REMOVE VALUE</button>
    </>
  )
}

export default App
