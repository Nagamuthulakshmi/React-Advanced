import {configureStore, createSlice} from '@reduxjs/toolkit';

const CounterSlice = createSlice({
    name: 'count',
    initialState:{count:0},
    reducers:{
        IncHandler(state,action){
        
            state.count++
        },
        DecHandler(state,action){
            state.count--
        },
        MultiplyBy5(state,action){
           state.count= state.count*action.payload
        }
    }
});

export const actions = CounterSlice.actions;
const shop = configureStore({reducer:CounterSlice.reducer})
export default shop;