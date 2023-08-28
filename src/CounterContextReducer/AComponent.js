import { useContext } from "react";
import { CountContext } from "./Main";

const AComponent = ()=>{
    const countContext = useContext(CountContext);
    const IncreaseHandler = ()=>{
        countContext.countDispatch('increase');
    }
    const DecreaseHandler =()=>{
        countContext.countDispatch('decrease');
    }
    return (<>
    <h1> Component A</h1>
    <button onClick={IncreaseHandler}>+</button>
    <span>{countContext.countState}</span>
    <button onClick={DecreaseHandler}>-</button>
    </>)
}
export default AComponent;