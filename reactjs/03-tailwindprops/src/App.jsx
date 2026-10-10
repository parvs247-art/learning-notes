import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-1 flex-col items-center justify-center gap-4'>
        <h1 className='text-2xl font-bold bg-green-400 p-4 rounded-xl text-black w-[450px]'>Tailwind Test</h1>
      </div>
    </>
  )
}

export default App
