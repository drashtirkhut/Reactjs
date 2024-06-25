import React, { useState } from 'react'

const Use_State_Form_Data = () => {

    const [name , setName] = useState()
    const [email , setEmail] = useState() 

    const handleSubmit = (e)=>{
       e.preventDefault()
       console.log(`${name} ,${email}`);
    }

  return (
    <div>
       <form>
        <label>Name</label>
        <input type="Email" name="" id="" value={name} onChange={(e)=> setName(e.target.value)} />
        <label>Email</label>
         <input type="Email" name="" id="" value={email}  onChange={(e)=> setEmail(e.target.value)}/>
        <button type="Submit">Submit</button>
       </form>
    </div>
  )
}

export default Use_State_Form_Data
