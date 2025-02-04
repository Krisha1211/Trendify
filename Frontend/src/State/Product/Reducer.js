
import { DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_BY_CATEGORY_FAILURE, FIND_PRODUCTS_BY_CATEGORY_REQUEST, FIND_PRODUCTS_BY_CATEGORY_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType"

const initialState={
    products:[],
    product:null,
    loading:false,
    error:null,
    productsByCategory: {}, // An object to hold products by category
}

export const customerProductReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case FIND_PRODUCTS_REQUEST:
        case FIND_PRODUCT_BY_ID_REQUEST:
        case DELETE_PRODUCT_REQUEST:    
        case FIND_PRODUCTS_BY_CATEGORY_REQUEST:
            return {...state,loading:true,error:null}

        case FIND_PRODUCTS_SUCCESS:
            return {...state,loading:false,error:null,products:action.payload}
        
        case FIND_PRODUCT_BY_ID_SUCCESS:
            return {...state,loading:false,error:null,product:action.payload}

        case FIND_PRODUCTS_BY_CATEGORY_SUCCESS:
            return { ...state,
                productsByCategory: {
                    ...state.productsByCategory,
                    [action.payload.categoryName]: action.payload.products,
                },}

        case DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading:false,
                error:null,
                deletedproduct:action.payload
            }    
        case FIND_PRODUCTS_FAILURE:
        case FIND_PRODUCT_BY_ID_FAILURE:
        case DELETE_PRODUCT_FAILURE:
        case FIND_PRODUCTS_BY_CATEGORY_FAILURE:

               return {...state,loading:false,error:action.payload}

         default:
            return state;
    }
}