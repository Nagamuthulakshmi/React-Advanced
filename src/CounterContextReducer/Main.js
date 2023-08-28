import React from 'react';
import { useReducer } from 'react';
import AComponent from './AComponent';
import BComponent from './BComponent';
import CComponent from './CComponent';

export const CountContext = React.createContext();
const Main = ()=>{
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
    <CountContext.Provider value={{countState:state.count,countDispatch:dispatcher}}>
   <AComponent />
   <BComponent />
   <CComponent />
   </CountContext.Provider>
    </>)
}
export default Main;