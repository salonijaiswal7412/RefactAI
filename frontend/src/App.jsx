import React, { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import prism from "prismjs"; // <-- Import Prism.js first
import "prismjs/themes/prism-tomorrow.css"; 


import "prismjs/components/prism-javascript";

 // Correct language component


function App() {
  useEffect(() => {
    prism.highlightAll();
  },[])
  return (

    <main className='w-screen h-screen '>
      <Navbar></Navbar>
      <div className="display flex h-[90%] mx-1 my-2 justify-evenly ">
        <div className="left bg-zinc-950 w-[49.5%] h-full rounded-xl relative ">
        <div className="code h-[97%]">
            <pre className="h-full rounded-xl bg-black p-4 overflow-auto">
              <code className="language-javascript">
                {`function sum() { return 1 + 1; }`}
              </code>
            </pre>
          </div>
          <div className="review text-purple-800 absolute bottom-2 right-2 bg-white font-bold w-20 rounded-lg h-8 text-center text-lg "><button>Review</button></div>
        </div>
        <div className="right bg-zinc-950 w-[49.5%] rounded-xl"></div>
      </div>

    </main>
  )
}

export default App


