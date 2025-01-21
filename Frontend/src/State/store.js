import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducers } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { adminOrderReducer } from "./Admin/Order/Reducer";



const rootReducers=combineReducers({
auth:authReducer,
products: customerProductReducer,
cart:cartReducers,
order:orderReducer,
adminOrder:adminOrderReducer,
})
export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))