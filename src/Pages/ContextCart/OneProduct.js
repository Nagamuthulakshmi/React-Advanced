import { useContext } from "react";
import { CartContext } from "../../ContextProvider.js";


const OneProduct = ({prod})=>{
        const {cart,setCart}= useContext(CartContext);
        console.log(cart);
     return (<article key={prod.id}>
                <h3>{prod.name}</h3> <p> Rs. {prod.price}</p>
                <img src={prod.image} alt={prod.name} style={{width:'50px'}} />
                {!cart.includes(prod)?(<button onClick={()=>{setCart([...cart,prod])}}>Add to Cart</button>):(<button onClick={()=>{setCart(cart.filter((c)=>{ return c.id !== prod.id}) )}}> Remove from Cart</button>
)}
        </article>)
 
}
export default OneProduct;