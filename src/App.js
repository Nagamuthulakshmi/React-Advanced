import ControlInput from "./Advanced/ControlledInputs";
import MultipleInput from "./Advanced/MultipleInputs";
import UseRefBasics from "./Advanced/useRefBasics";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./Pages/SharedLayout";
import SingleProduct from "./Pages/SingleProduct";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { useState } from "react";
import ProtectedRoute from "./ProtectedRoute";
import Demo from "./CounteruseReducer/Demo";
import AllProducts from "./Pages/ContextCart/AllProducts";
import Cart from "./Pages/ContextCart/Cart";
import Main from "./CounterContextReducer/Main";
import ReduxCounter from "./CounterRedux/ReduxCounter";
import ToolkitCounter from "./CounterReduxToolKit/ToolKitCounter";


function App() {
  //const [cart,setCart] = useState([]);

  const [user,setUser] = useState(null);
  return (<BrowserRouter>
  
    <Routes>
    <Route path='/' element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<About />}></Route> 
        <Route path='products' element={<Products />}></Route>
        <Route path='products/:productId/:productName' element={<SingleProduct/>}></Route>
        <Route path='login' element = {<Login setUser={setUser}></Login>}></Route>
        <Route path='counter' element={<Demo />}></Route>
        <Route path='dashboard' element = {<ProtectedRoute user={user}>
        <Dashboard user={user}></Dashboard>
        </ProtectedRoute>}></Route>
        <Route path='allproducts' element={<AllProducts  />}></Route>
        <Route path='cartpage' element={<Cart />}></Route>
        <Route path='counterCR' element={<Main />}></Route>
        <Route path='reduxcount' element={<ReduxCounter />}></Route>
        <Route path='toolkitCount' element={<ToolkitCounter/>}></Route>
        <Route path='useRef' element={<UseRefBasics/>}></Route>
        <Route path='controlled' element={<ControlInput/>}></Route>
        <Route path='multiple' element={<MultipleInput/>}></Route>
        <Route path = "*" element={<Error/>} />
    </Route>
  </Routes>

  </BrowserRouter>
  );
}

export default App;
