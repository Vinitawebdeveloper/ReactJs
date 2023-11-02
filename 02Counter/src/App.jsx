import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter]=useState(5)

  
  // let counter = 5
  const addValue = ()=>{
    // console.log("value added",Math.random())
    // counter=counter+1
    if(counter<20){
    setCounter(counter+1)
    console.log(counter);}
    
  }
  const removeValue=()=>{
    if(counter>0){
    setCounter(counter-1)}

  }

  return (
    <>
      <h1>Vinita with code</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button><br/>
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
