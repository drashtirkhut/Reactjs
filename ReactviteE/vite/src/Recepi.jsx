import React, { useState } from 'react'



const Recepi = () => {

  const [Count, setCount] = useState("choose you Recepi")

    
function Recepi_A(){

    return (

        <ol>    
          <li>Add 3-4 cup mango cubes.</li>
          <li>Add 1-2 tbsp.sugar.its optional,you can skip.</li>
          <li>Add milk.</li>
          <li>Add 7-8 ice cubes</li>
          <li>Blend really well till smooth</li>
          <li>Pour equal quantities in glasses</li>
          <li>Serve your <mark>mango milkshake</mark>.</li>
        </ol>
      );
    
}

  const Recepi_1 = () => {
    setCount( Recepi_A)
  }
  
  function Recepi_B(){

    return (
        <ol>    
          <li>In a small bowl,take 1/4 cup Water.</li>
          <li> Add 3 tablespoons cocoa powder. You can even add 2 tablespoons cocoa powder.</li>
          <li>Then, add ¼ cup sugar. You can add sugar less or more as per taste.</li>
          <li>Mix very well so that the sugar as well as the cocoa powder is dissolved in the warm water.</li>
          <li>Now, pour this chocolate syrup in a blender or mixer.</li>
          <li>Add some ice cubes.</li>
          <li> Add 2.5 cups chilled or cold milk.</li>
          <li>Blend till smooth.</li>
          <li>Drizzle some chocolate syrup on the sides of glasses. This is an optional step.</li>
          <li> Pour prepared Chocolate Milkshake in these glasses.</li>
          <li>Then, add a scoop of chocolate ice cream. </li>
          <li>Ready your <mark>Chocolate Milkshake</mark></li>
        </ol>
      );
    
}

const Recepi_2 = () => {
    setCount( Recepi_B)
  }
  
  const Reset = () => {

    setCount("Selecte your recipe")
  }

  return (
    <>
    
      <div className='mt-20'>
        <h1 className=' font-bold text-2xl bg-pink-500 text-white h-20 flex items-center justify-center'>React Hooks Counter With UseState</h1>

        <h1 className='font-bold mt-20 flex items-center justify-center text-3xl' >{Count}</h1>
        <div className='text-center space-x-4 mt-8 '>
          <button className='border-2 border-gray-300 rounded-xl py-2 px-4  hover:border-black' onClick={Recepi_1}>Mango milkshake</button>
          <button className='border-2 border-gray-300 rounded-xl py-2 px-4  hover:border-black' onClick={Recepi_2}>Chocolate Milkshake</button>
          <button className='border-2 border-gray-300 rounded-xl py-2 px-4  hover:border-black' onClick={Reset}>Reset</button>
        </div>
      </div>
    </>
  )
}


export default Recepi