import { useContext } from "react";
import { CountContext } from "./Main";
const DComponent = ()=>{
    const countContext = useContext(CountContext);
    const IncreaseHandler = ()=>{
        countContext.countDispatch('increase');
    }
    const DecreaseHandler =()=>{
        countContext.countDispatch('decrease');
    }
    return (<>
    <h1> Component D</h1>
    <button onClick={IncreaseHandler}>+</button>
    <span>{countContext.countState}</span>
    <button onClick={DecreaseHandler}>-</button>
    </>)
}
export default DComponent;