import React from "react";
import { useParams,Link } from "react-router-dom";
import products from "./data";


const SingleProduct = ()=>{
    const {productId,productName} = useParams();
    const productObject = products.find((p)=>
        p.id === productId
    )
   const {image} = productObject;
    return (<>
    <h1> Product No {productId}</h1>
    <h3> Product Name {productName}</h3>
<img src={image} alt={productName}></img>
    </>)
}

export default SingleProduct;