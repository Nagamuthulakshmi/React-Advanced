
import products from "../data";
import OneProduct from "./OneProduct";


const AllProducts = ()=>{
  
    return (<>

    <section>
<h2> List of Products</h2>
<div>
    {products.map((p)=>{
       return <OneProduct prod={p} key={p.id}></OneProduct>
    })}
</div>

    </section>
    </>)
}
export default AllProducts;