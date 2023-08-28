import { Link } from "react-router-dom";
const Navbar =()=>{
    return(<>
    <nav>
<Link to ='/'>HOME</Link>&nbsp;&nbsp;&nbsp;
<Link to ='about'>ABOUT</Link>&nbsp;&nbsp;&nbsp;
<Link to ='products'>PRODUCTS</Link>&nbsp;&nbsp;&nbsp;
    </nav>
    </>)
}
export default Navbar;