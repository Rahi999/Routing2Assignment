import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.css"

 
const ProductDetails = () => {
 const [product, setProduct ] = useState({});
 const { id } = useParams();


   
   const handleOnClick = ()=> {
         confirm("Do You Wannt To Add This Product To Cart")
         alert("Product Added To cart")
   }

 useEffect(()=> {
    if(id){
          fetch(`https://17ff65.sse.codesandbox.io/products/${id}`)
          .then((res)=> res.json())
          .then((data)=> setProduct(data))
          .catch((err)=> alert("Product does not exist"))
    }
     
 },[id])

  return (
    <div>
       <img className={styles.image} src={product.image} alt="" />
       <h3>{product.price}$</h3>
       <h3>{product.category}</h3>
       <h3>{product.title}</h3>

         <button onClick={handleOnClick} >Add To cart</button>

    </div>
  )
}

export default ProductDetails