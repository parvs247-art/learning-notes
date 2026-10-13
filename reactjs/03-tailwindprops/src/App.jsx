import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <ul className="uppercase tracking-wider flex justify-center gap-5 font-bold text-sm text-gray-500">
            <li>home</li>
            <li>start</li>
            <li>projects</li>
            <li>about</li>
          </ul>
        </nav>
      </header>
      <section className="text-center space-y-5 max-w-3xl mx-auto px-5 py-12">
        <h1 className="text-4xl font-bold">Let's learn Tailwind</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sit earum. Similique sit molestiae rem, expedita, alias dolor iusto vel architecto repudiandae accusantium temporibus et aperiam assumenda ipsum nesciunt est dolore obcaecati.</p>
        <a href="https://www.google.com/" target='_blank' className="inline-block bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded">click here</a>
      </section>
    </>
  )
}

export default App
