import { useDispatch, useSelector } from "react-redux";



const ReduxCounter = ()=>{
    const dispatch = useDispatch();
    const counter = useSelector((state)=>state.count)
   const IncHandler =()=>{
    dispatch({type:'increase'});
   }
   const DecHandler = ()=>{
    dispatch({type:'decrease'});
   }
   const multiplyHandler=()=>{
    dispatch({type:'mul',payload:10})
   }
   return (<>
   <h1>{counter}</h1>
   <button onClick={IncHandler}>+ </button>
   <button onClick={DecHandler}>- </button>
   <button onClick={multiplyHandler}>*10 </button>
    </>)
}
export default ReduxCounter;