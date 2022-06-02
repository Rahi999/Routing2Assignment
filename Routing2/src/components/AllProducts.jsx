import React, { useEffect, useState } from 'react'
import {Link, Outlet} from "react-router-dom"
import styles from "./AllProduct.module.css"


const AllProducts = () => {
  const [prod, setProd] = useState([]);

  useEffect(()=> {
      const data = ()=> {
          fetch("https://17ff65.sse.codesandbox.io/products")
          .then((res)=> res.json())
          .then((d)=> {
              console.log(d)
              setProd(d)
          })
      }
      data()
  },[])



  return (
    <div>AllProducts
   <div className={styles.container}>
       {prod.map((p)=> (
           <div key={p.id} >
               <Link to={`/allProducts/${p.title}`}><img
                className={styles.image}
                 src={p.image} alt="" 
                 />
                 <h3>{p.title}</h3>
                 <h3>{p.category}</h3>
                 <h3>{p.price}$</h3>
                 </Link>
           </div>
           
       ))}
   </div>
   <Outlet />


    </div>
  )
}

export default AllProducts