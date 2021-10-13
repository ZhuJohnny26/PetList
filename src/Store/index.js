import { createStore, applyMiddleware} from "redux";
import petsReducer from "./pets";
import thunkMiddleware from 'redux-thunk'
const store = createStore(petsReducer, applyMiddleware(thunkMiddleware))

export default store