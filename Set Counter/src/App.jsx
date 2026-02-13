import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter, setCounter]  = useState(7)
  
//  let counter = 7

 const addValue= ()=>{
//  console.log("value added" , counter)
   //  counter = counter+1;
    setCounter(counter+1)
 }

 const removeValue = () =>{
  setCounter(counter-1)
 }
  return (<>  
        <h1> Chai Aur Code </h1>
        <h2> Counter Value : {counter} </h2>


        <button onClick = {addValue}>    Add Value</button>
        <br></br>
        <button onClick={removeValue}> Decrease value</button>
        </>
     
  );


}

export default App
