import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-zinc-950 w-full h-11 px-2 flex  justify-between items-center'>
        <div className="mx-4 logo text-white text-3xl font-semibold tracking-widest">Refact<span className='text-purple-900 font-bold'>AI</span></div>
        <div className="desc text-zinc-400 text-lg tracking-widest mx-4">AI-powered code reviews for developers who care.</div>

    </nav>
  )
}

export default Navbar
