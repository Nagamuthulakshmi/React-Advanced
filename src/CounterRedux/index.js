import { act } from 'react-dom/test-utils';
import {createStore} from 'redux';

const reducerFn = (state={count:0},action)=>{
    if(action.type=='increase'){
        return {count: state.count+1}
    }
    if(action.type=='decrease'){
        return {count: state.count-1}
    }
    if(action.type=='mul'){
        return {count: state.count*action.payload}
    }
return state;
}

const store = createStore(reducerFn);
export default store;