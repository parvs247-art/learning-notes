import { useState } from 'react'
import './App.css'

function App() {
let [counter, setCounter] = useState(0)
  // let counter = 0;

  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    console.log("clicked", counter);
    setCounter(counter - 1);
    if(counter <= 0){
      setCounter(0);
    }
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value : {counter}</h2>

     <button
     onClick = {addValue}
     >Add value</button>
     <br/>
     <button 
     onClick={removeValue}
     >Remove value</button>
    </>
  )
}

export default App
