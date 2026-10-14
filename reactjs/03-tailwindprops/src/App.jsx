import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav>
          <ul className="uppercase tracking-wider flex justify-center sm:justify-between gap-5 font-bold text-sm text-gray-500">
            <li><a href="#" className="hover:text-fuchsia-500">home</a></li>
            <li><a href="#" className="hover:text-fuchsia-500">start</a></li>
            <li><a href="#" className="hover:text-fuchsia-500">projects</a></li>
            <li><a href="#" className="hover:text-fuchsia-500">about</a></li>
          </ul>
        </nav>
      </header>
      <section className="text-center space-y-5 max-w-3xl mx-auto px-5 py-12 grid lg:grid-cols-2 lg:gap-10 lg:items-center lg:max-w-5xl">
        <img src="https://via.placeholder.com/600x400" alt="Placeholder Image" className="w-full h-auto rounded-xl lg:order-2" />
      <div>
        <h1 className="text-4xl font-bold">Let's learn Tailwind</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sit earum. Similique sit molestiae rem, expedita, alias dolor iusto vel architecto repudiandae accusantium temporibus et aperiam assumenda ipsum nesciunt est dolore obcaecati.</p>
        <a href="https://www.google.com/" target='_blank' className="inline-block bg-fuchsia-500 hover:bg-fuchsia-600 text-white font-bold py-2 px-4 rounded">click here</a>
      </div>
      </section>

      <section className="text-center space-y-5 max-w-3xl mx-auto px-5 py-12 ">
        <h2 className='text-3xl font-bold text-center'>Resources</h2>
        <div className='bg-blue-800 bg-linear-to-bl from purple-800 to-blue-800 space-y-3 p-5 rounded-md'>
          <h3>What is Tailwind?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, placeat.</p>
          <a href="" className="font-bold text-fuchsia-500 hover:text-fuchsia-600">Read more</a>
        </div>
         <div className='bg-blue-800 bg-linear-to-bl from purple-800 to-blue-800 space-y-3 p-5 rounded-md'>
          <h3>What is Tailwind?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, placeat.</p>
          <a href="" className="font-bold text-fuchsia-500 hover:text-fuchsia-600">Read more</a>
        </div>
         <div className='bg-blue-800 bg-linear-to-bl from purple-800 to-blue-800 space-y-3 p-5 rounded-md'>
          <h3>What is Tailwind?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, placeat.</p>
          <a href="" className="font-bold text-fuchsia-500 hover:text-fuchsia-600">Read more</a>
        </div>
         <div className='bg-blue-800 bg-linear-to-bl from purple-800 to-blue-800 space-y-3 p-5 rounded-md'>
          <h3>What is Tailwind?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, placeat.</p>
          <a href="" className="font-bold text-fuchsia-500 hover:text-fuchsia-600">Read more</a>
        </div>
         <div className='bg-blue-800 bg-linear-to-bl from purple-800 to-blue-800 space-y-3 p-5 rounded-md'>
          <h3>What is Tailwind?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, placeat.</p>
          <a href="" className="font-bold text-fuchsia-500 hover:text-fuchsia-600">Read more</a>
        </div>
      </section>
    </>
  )
}

export default App
