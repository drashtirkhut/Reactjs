import React from 'react'
import { useState } from 'react'

const inittialvalue=20

const Use_State = () => {
    const [state,setState]= useState(inittialvalue)

 const handleIncrement=()=>{
    setState(state+10)
 }

 const handledecrement=()=>{
    setState(state-10)
}

const handleReset=()=>{
    setState(inittialvalue)
}
    return (

        <div>
            
            <h1 className='text-3xl text-bold text-center bg-black text-white p-4'>React usestate Hook</h1>
        
        <span>
            useStateHook value:- {state}
        </span>

        <button className='bg-black p-2 ms-4 text-white' onClick={handleIncrement}>Increment</button>
        <button className='bg-black p-2 ms-4 text-white' onClick={handledecrement}>Decrement</button>
        <button className='bg-black p-2 ms-4 text-white' onClick={handleReset}>Reset</button>
        </div>

      
    )
}

export default Use_State
