'use client'


import Image from "next/image";
import { useState } from "react";



export default function Home() {

    const [count, setCount] = useState(10);
  
    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      setCount(count - 1);
    };

    const handleReset = () => {
      setCount(10);
    };
  
    return (
      <div>
        <>
          {/* <h1 className=" text-center text-4xl">this is Next Project</h1>
          <Print name="one" />
          <Print name="two"/>
          <Print name="three" />
          <Print name="four"/> */}
        <p>Count: {count}</p>
        <button className=' bg-pink-500 h-7 w-24 border-black border-2' onClick={handleIncrement}>INCRMENT</button>
        <button  className='bg-pink-500 h-7 w-26 border-black border-2'onClick={handleDecrement}>DECREMENT</button>
        <button  className='bg-pink-500 h-7 w-26 border-black border-2'onClick={handleReset}>RESET</button>
    </>
      </div>

  );
}

// export const Print =(props) => {
//     return(
//       <>
//        <div>this is Print {props.name} Element</div>
//        <button className=" bg-slate-400" onClick={()=>alert('Hi,I am Nextjs!!!')}>Click</button>
//       </>
//     )
// }