import { useState, useCallback } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeChar, setIncludeChar] = useState(false)
  const [password, setPassword] = useState('')

  const passwordGenerator = useCallback(() => {
    let password = ''
    let string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeNumbers) {
      string += '0123456789'
    }
    if (includeChar) {
      string += '!@#$%^&*()_+'
    }
    for (let i = 1; i <= length; i++) {
      const randomIndex = Math.floor(Math.random() * string.length + 1)
      password += string[randomIndex]
    }
    setPassword(password)
  },[length, includeNumbers, includeChar, setPassword])

  return (
    <>
    <div  className="w-full max-w-sm mx-auto bg-gray-300 p-4 rounded-lg shadow-md mt-10">
    <h1 className="text-2xl font-bold text-center my-4">Password Generator</h1>
      <div className="mb-4" flex shadow rounded-lg overflow-hidden>
        <input type="text" value={password} placeholder="Generated Password" readOnly className="bg-white border border-gray-300 rounded-md py-2 px-10 focus:outline-none focus:ring-2 focus:ring-blue-500 " />
        <button  className="bg-blue-500 text-white py-1 px-3 rounded-md ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">copy</button>
      </div>
      <div className="flex text-sm gap-x-2 mb-4">
        <div className="flex items-center gap-x-1">
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer" 
          onChange={(e)=>{setLength(e.target.value)} }    
           /> 
           <label>length :{length}</label>
          </div>
          <div className=" flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={includeNumbers}
            id='numberInput'
            onChange={()=>{
              setIncludeNumbers((prev)=>!prev);
            }}
            />
            <label htmlFor='numberInput'> Numbers</label>  
          </div>
          <div className=" flex items-center gap-x-1">
            <input 
            type="checkbox"
            defaultChecked={includeChar}
            id='charInput'
            onChange={()=>{
              setIncludeChar((prev)=>!prev);
            }}
            />
            <label htmlFor='charInput'> Characters</label>  
          </div>
      </div>
      <div className="flex justify-center">
        <button 
        onClick={passwordGenerator}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Generate Password</button>
      </div>
    </div>
    </>
  )
} 

export default App
