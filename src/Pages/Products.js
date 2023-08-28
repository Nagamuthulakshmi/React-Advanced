import React from "react";
import products from "./data";
import { Link } from "react-router-dom";
const Products = ()=>{
    return (<>
    <section>
<h2> List of Products</h2>
<div>
    {products.map((p)=>{
        return (<article key={p.id}>
                <h3>{p.name}</h3>
                <Link to={`/products/${p.id}/${p.name}`}>Know More...</Link>
        </article>)
    })}
</div>

    </section>
    
    </>)
}

export default Products;