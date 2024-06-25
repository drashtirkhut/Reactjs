import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'

const ProductData = () => {

  const [product  , setProduct]  = useState([])

  console.log('ProductData' , product); 


  // const handleProductData = async() => {
  //   const response = await fetch('https://dummyjson.com/products')
  //   const data = await response.json()
  //   console.log(data);
  //   // .then(response => response.json())
  //   // .then(response => console.log(response.data))
  //   // .catch(error => console.log(error))
  // }

//   const handleProductData = async() => {
//     try{
//       const response = await fetch('https://dummyjson.com/products')
//       const data = await response.json()
//       setProduct(data.products)
//       console.log(data.products);
//     }catch(error){
//       console.log(error);
//     }
//   }

  const handleProductData = () => {
    try{
      const response =  axios.get('https://jsonplaceholder.typicode.com/users')
      console.log(response);
    }catch(error){
      console.log(error);
    }

    const response =  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response =>  setProduct(response.data))
   
  }

  useEffect(() => {
    handleProductData()
  } , [])



  return (
    <div>
      <button className='btn' onClick={handleProductData}>GetProductData</button>
      {
        product.map((item) => {
          return(
            <>
              <div>{item.id}</div>
              <div>{item.title}</div>
            </>
          )
        })
      }
    </div>

  )
}

export default ProductData