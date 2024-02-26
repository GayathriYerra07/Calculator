import {createStore} from 'redux';
import reducer from './reducer';

// Creating the Redux store with the reducer
const store = createStore(reducer);

export default store;