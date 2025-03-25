import { applyMiddleware, combineReducers, createStore } from "redux";
import GetReducer from "./reducers/GetReducer";
import ChangeReducer from "./reducers/ChangeReducer";
import AddReducer from "./reducers/AddReducer";
import DeleteReducer from "./reducers/DeleteReducer";
import {thunk} from 'redux-thunk'

const rootReducer = combineReducers({
   GetState: GetReducer,
   ChangeState : ChangeReducer,
   AddState : AddReducer,
   DeleteState : DeleteReducer 
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store