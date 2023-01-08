

const {createStore} = require('redux');
// constent
const INCRIMENT = "INCRIMENT"
const DECRIMENT = "DECRIMENT"
const RESET = "RESET"


// define a state
const initialState ={
    count : 0
}

// action
const incrimetnCount =()=>{
    return {
        type: INCRIMENT
    }
}
const decrimentCount =()=>{
    return {
        type:DECRIMENT
    }
}
const resetCount =()=>{
    return {type:RESET}
}

// creating reducer
const Reducer = (state=initialState,action)=>{

    switch (action.type) {
        case INCRIMENT:
           return{
               ...state,
               count : state.count + 1
           }
        case DECRIMENT:
           return{
            ...state,
               count : state.count - 1
           }
    
        case RESET:
           return{
            ...state,
               count : 0
           }
    
        default:
           state;
    }
    
}


// crete a store ; before make store you should requre or import createStore from redux
const store = createStore(Reducer)

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(incrimetnCount())