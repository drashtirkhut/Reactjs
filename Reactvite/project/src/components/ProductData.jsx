import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'

const ProductData = () => {

    const [product , setproduct] = useState([])

    console.log('productdata' , product);


    // const handleproductData = async() => {
    // const response = await fetch('https://dummyjson.com/products')
    // const data = await response.json()
    // console.log(data);
    // // .then(response => response.json())
    // // .then(response => console.log(response.data))
    // // .then(error => console.log(error))
    // }

    const handleproductData = async() => {
        try{
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        setproduct(data.product)
        console.log(data.product);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() =>{
      handleproductData()
    }, [])


  return (
    <div>
      <button className='btn' onClick={handleproductData}>GetproductData</button>
       {
        product.map((item) => {
            return(
                <>
                <div>{item.id}</div>
                <div>{item.titel}</div>
                </>
            )
        }
    )
       }
    </div>
  )
}

export default ProductData