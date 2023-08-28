import { actions } from "./CounterSlice";
import { useDispatch, useSelector } from "react-redux";
    

const ToolkitCounter = ()=>{
    const dispatch = useDispatch();
    const counter = useSelector((state)=>state.count)
        const IncHandler =()=>{
        dispatch(actions.IncHandler());
       }
       const DecHandler = ()=>{
        dispatch(actions.DecHandler());
       }
       const multiplyHandler=()=>{
        dispatch(actions.MultiplyBy5(5))
       }
    return(<>
     
   <h1>{counter}</h1>
   <button onClick={IncHandler}>+ </button>
   <button onClick={DecHandler}>- </button>
   <button onClick={multiplyHandler}>*5 </button>
   
    </>)
}
export default ToolkitCounter