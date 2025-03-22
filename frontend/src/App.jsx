import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import prism from "prismjs"; 
import Editor from "react-simple-code-editor";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import axios from "axios"
import Markdown from "react-markdown"
import "./index.css"; 

function App() {
  const [code, setCode] = useState(`function sum() { return 1 + 1; }`);
  const [review,setReview]=useState('get your review here');

  async function reviewCode(){
    const response=await axios.post("http://localhost:3000/ai/get-review",{code});
    setReview(response.data);
  }

  return (
    <main className="w-screen h-screen bg-zinc-800">
      <Navbar />
      <div className="display flex h-[90%] mx-1 my-2 justify-evenly">
        <div className="left bg-zinc-950 w-[49.5%] h-[100%] rounded-xl relative overflow-x-hidden">
          <div className="code h-full m-0">
            <Editor
              value={code}
              onValueChange={(newCode) => setCode(newCode)}
              highlight={(code) => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira Code", "Fira Mono", monospace',
                fontSize: 16,
                height: "100%",
                width: "100%",
                backgroundColor: "#0f0f0f",
                color: "#ffffff", 
                borderRadius: "1rem",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div className="review text-purple-800 absolute bottom-2 right-2 bg-white font-bold w-20 rounded-lg h-8 text-center text-lg cursor-pointer">
            <button onClick={reviewCode}>Review</button>
          </div>
        </div>
        <div className="right bg-zinc-950 w-[49.5%] rounded-xl text-white p-3 overflow-y-auto overflow-x-hidden h-full ">
          <Markdown style={{
            fontSize:16,
          }}>
          {review}
          </Markdown>
        </div>
      </div>
    </main>
  );
}

export default App;
