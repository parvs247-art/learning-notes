import { useState } from 'react'

function App() {
  const [color, setColor] = useState('lightblue')

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap bottom-12 px-2 inset-x-0"></div>
      <div className="flex flex-wrap px-2 py-4 justify-center gap-3 shadow-lg bg-white rounded-3xl">
        <button
          className="w-12 h-12 rounded-full shadow-lg"
          style={{ backgroundColor: 'lightblue' }}
          onClick={() => setColor('lightblue')}
        >blue</button>
        <button
          className="w-12 h-12 rounded-full shadow-lg"
          style={{ backgroundColor: 'lightgreen' }}
          onClick={() => setColor('lightgreen')}
        >green</button>
        <button
          className="w-12 h-12 rounded-full shadow-lg"
          style={{ backgroundColor: 'lightcoral' }}
          onClick={() => setColor('lightcoral')}
        >red</button>
        <button
          className="w-12 h-12 rounded-full shadow-lg"
          style={{ backgroundColor: 'lightgoldenrodyellow' }}
          onClick={() => setColor('lightgoldenrodyellow')}
        >yellow</button>
      </div>
    </div>
  )
}

export default App
