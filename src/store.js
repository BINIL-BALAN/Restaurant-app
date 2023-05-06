import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { homeReducer } from "./redusers/homeReducer";
const middleware = [thunk]

const reducers = combineReducers({
    resturantReducer:homeReducer
})

const store = createStore(reducers,applyMiddleware(...middleware))

export default store