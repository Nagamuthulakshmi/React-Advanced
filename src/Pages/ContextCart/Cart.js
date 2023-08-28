import OneProduct from "./OneProduct";
import { CartContext } from "../../ContextProvider";

import { useContext, useEffect,useState } from "react";
const Cart = ()=>{
    const [total,setTotal] = useState();
    const {cart,setCart}= useContext(CartContext);
    useEffect(()=>{
setTotal(cart.reduce((acc,cur)=>{return acc+Number(cur.price)},0),[])
    })
    return (<>
    <h1>Total: Rs. {total}</h1>
   {cart.map((prod)=>{{
    return <OneProduct prod={prod} key={prod.id} />
   }})}
    </>)
}
export default Cart;