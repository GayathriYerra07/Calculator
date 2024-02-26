import {ADD_CALCULATION, CLEAR_HISTORY} from './actions';

// Initial state of the Redux store
const initialState ={
    history:[],// Array to store calculation history
};

// Reducer function to handle actions and update state accordingly
const reducer =(state = initialState,action)=>{
    switch(action.type){
        case ADD_CALCULATION:
            return{
                // Adding a new calculation to history
                ...state,
                history:[...state.history,action.payload],
            };
        
        case CLEAR_HISTORY:
            // Clearing the calculation history
            return{
                ...state,
                history:[],
            };
        default:
            return state;
    }

};

export default reducer
