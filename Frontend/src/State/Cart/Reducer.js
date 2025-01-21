import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

const initialState={
    cart:null,
    loading:false,
    error:null,
    cartItems:[],
}


// action.payload === anser we get after applying this method..
export const cartReducers=(state=initialState,action)=>
{
    switch(action.type){
       case ADD_ITEM_TO_CART_REQUEST:
        return {...state,loading:true,error:null};
       case ADD_ITEM_TO_CART_SUCCESS:
        return {...state,cartItems:[...state.cartItems, action.payload.catItems],
            loading:false,
        };
        case ADD_ITEM_TO_CART_FAILURE:
            return {...state,loading:false,error:action.payload };
        case GET_CART_REQUEST:
            return {
                ...state,
                loading:true,
                error:null
            };
        case  GET_CART_SUCCESS:
            return{
                ...state,
                cartItems:action.payload.catItems,
                cart:action.payload,
                loading:false
            };   
        case GET_CART_FAILURE:
            return {
                ...state,
                error:action.payload,
                loading:false
            }
        case REMOVE_CART_ITEM_REQUEST:
        case UPDATE_CART_ITEM_REQUEST:
            return {
                ...state,
                loading:true
            };
        case REMOVE_CART_ITEM_SUCCESS:
            return{
                ...state,
                loading:false,
                error:null,
                deleteCartItem:action.payload,
            }  
            
        case UPDATE_CART_ITEM_SUCCESS:
            return{
                ...state,
                loading:false,
                error:null,
                updateCartItem:action.payload,
            }   

        case REMOVE_CART_ITEM_FAILURE:
        case UPDATE_CART_ITEM_FAILURE:
            return{
                ...state,
                error:action.playload,
                loading : false
            }
            default:
                return state;
    }
}