// Action types
export const ADD_CALCULATION ='ADD_CALCULATION';// Action type for adding a calculation to history
export const CLEAR_HISTORY ='CLEAR_HISTORY';// Action type for clearing the calculation history

// Action creators
export  const addCalculation = (calculation) =>({
        type:ADD_CALCULATION,
        payload:calculation,
});

export const clearHistory = () =>({
        type:CLEAR_HISTORY,
});
