import React from "react";
import { Outlet } from "react-router-dom";
import StyledNavBar from "./StyledNavBar";


const SharedLayout = ()=>{
    return (<>
    <StyledNavBar></StyledNavBar>
    <section>
   <Outlet></Outlet>
   </section>
    </>)
}

export default SharedLayout;