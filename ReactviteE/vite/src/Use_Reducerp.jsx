// import React, { useReducer } from 'react'

// const Use_Reducerp = () => 
//     const reducer=(state , action)=>{
//         switch(action){
//             case 'INCRMENT':
//         }
//     }
//     const [state , dispatch] = useReducer(reducer,)

//   const handlelIncrmenet=()=>{
//     dispatch('INCRMENT')
//   }
//   const handlelDecrmenet=()=>{
//     dispatch('DECRMENT')
//   }

//   return (
//     <div>
//         <div className='flex justify-between'>
//             <span>{state}</span>
//       <button onClick={handlelIncrmenet}>INCRMENT</button>
//       <button onClick={handlelDecrmenet}>DECRMENT</button>
//       <button onClick={handlelReset}>RESET</button>
//       </div>

//     </div>
import React, { useReducer } from 'react';

// Reducer function to handle state updates
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {state, count: state.count + 1 };
    case 'decrement':
      return { state, count: state.count - 1 };
    case 'reset':
      return { state, count: 0 };
   
  }
}

function Counter() {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Cake items: {state.count}</p>
      <button className='h-6 w-16 bg-fuchsia-400' onClick={() => dispatch({ type: 'increment' })}>Increment Cake</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement Cake</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  );
}

export default Counter;