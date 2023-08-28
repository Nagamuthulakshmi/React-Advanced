import './Demo.css'
import { useReducer } from 'react';


const Demo = ()=>{
    const reducer = (curState, action)=>{
        switch(action){
            case 'increase':
                return {count:curState.count+1}
            case 'decrease':
                return {count:curState.count-1}
            default:
                return curState;
        }
    }
    
    const [state,dispatcher] = useReducer(reducer,{count:0})
    function IncreaseHandler(){
        dispatcher('increase');
    }
        
    function decreaseHandler(){
        dispatcher('decrease')
    }
    return (<>
    <br></br>
    <button onClick={IncreaseHandler}>+</button>
    <span>{state.count}</span>
    <button onClick={decreaseHandler}>-</button>
   
    </>)
}
export default Demo;