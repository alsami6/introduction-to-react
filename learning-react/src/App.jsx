import React from 'react'
import { useState } from 'react';

const App = () => {

    const[userName, setUserName] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(userName);
        setUserName("")
    }


  return (
    <div>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <input
            value={userName}
            onChange={(e)=>{
                setUserName(e.target.value);
            }}
            className='px-4 py-3 text-xl m-5 rounded' 
            type="text" 
            placeholder='enter your name'/>
            <button className='px-4 py-3 text-xl m-5 font-semibold bg-emerald-600 rounded text-white'>Submit</button>
        </form>
    </div>
  )
}

export default App
