import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../ContextProvider.js";

const StyledNavBar = ()=>{
const {cart,setCart} = useContext(CartContext);
    return(<>
    <nav>
    <NavLink to='/' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>HOME</NavLink> &nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to='/about' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>ABOUT</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to='/products' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>PRODUCTS</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to='/login' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>LOG IN</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to='/counter' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>USE REDUCER</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to='/allproducts' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>ALL PRODUCTS</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to='/cartpage' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>Cart Items - {cart.length}</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to='/counterCR' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>useContext+useReducer</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to='/reduxcount' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>Redux Counter</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to='/toolkitCount' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>Redux ToolKit Counter</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
     <NavLink to='/useRef' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>useRef</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to='/controlled' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>Controlled Inputs</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
     <NavLink to='/multiple' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>Multiple Inputs</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to='/booklist' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>Nested Components</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to='/githubUsers' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>useEffect-Github Users</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to='/searchGithubUser' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>Github Users Search</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to='/rendering' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>Conditional Rendering</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    <NavLink to='/useState' style={({isActive})=>{
        return {backgroundColor:isActive?'pink':'yellow'}
    }}>UseState Basics</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
    </nav>
       
    
    </>)
}
export default StyledNavBar;