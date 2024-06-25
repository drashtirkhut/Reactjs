import React from 'react';
import { useState } from 'react';



// export default function Counter() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 5);
//   }

//   return (
//     <button onClick={handleClick}>
//        pressed {count} times
//     </button>
//   );
// }



// export default function MyInput() {
//   const [text, setText] = useState('hello');

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <>
//       <input value={text} onChange={handleChange} />
//       <p>You typed: {text}</p>
//       <button className='bg-black p-2 ms-4 text-white' onClick={() => setText('hello')}>
//         Reset
//       </button>
//     </>
//   );
// }



// export default function MyCheckbox() {
//   const [liked, setLiked] = useState(true);

//   function handleChange(e) {
//     setLiked(e.target.checked);
//   }

//   return (
//     <>
//       <label>
//         <input
//           type="checkbox"
//           checked={liked}
//           onChange={handleChange}
//         />
//         I liked this
//       </label>
//       <p>You {liked ? 'liked' : 'did not like'} this.</p>
//     </>
//   );
// }


export default function Form() {
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  return (
    <>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>
        Increment age
      </button>
      <p>Hello, {name}. You are {age}.</p>
    </>
  );
}







// const NumCounter=()=> {
//     const [count, setCount] = useState(0);
  
//     const handleIncrement = () => {
//       setCount(count + 5);
//     };
  
//     const handleDecrement = () => {
//       if (count > 0) {
//         setCount(count - 3);
//       }
//     };
  
//     return (
//       <div>
//         <p>Count: {count}</p>
//         <button className='button1 h-12 w-26 bg-black text-xl text-white ' onClick={handleIncrement}>Increment </button>
//         <button className='button1 h-12 w-26 m-5 bg-black text-xl text-white ' onClick={handleDecrement} disabled={count === 0}>Decrement</button>
//       </div>
//     );
//   }
  
//   export default NumCounter