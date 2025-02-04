import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";
import { api, API_BASE_URL } from "../../config/apiConfig";
import { FIND_PRODUCTS_BY_CATEGORY_FAILURE,FIND_PRODUCTS_BY_CATEGORY_SUCCESS,FIND_PRODUCTS_BY_CATEGORY_REQUEST} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {

    dispatch({ type: FIND_PRODUCTS_REQUEST })
    const {
        color, sizes, minPrice, maxPrice, minDiscount, category, stock, sort, pageNumber, pageSize
    } = reqData;

    try {
        const {data} = await api.get(`/api/products?color=${color}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
        console.log("product data = ",data)
        dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
    }
    catch(error) {
dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
    }
}


export const findProductsById = (reqData) => async (dispatch) => {

    dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST })
    const {productId} = reqData;
    try {
        const {data} = await api.get(`/api/products/id/${productId}`)
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    }
    catch(error) {
dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
}


export const createProduct = (product) => async (dispatch) => {

    dispatch({ type: CREATE_PRODUCT_REQUEST })
    try {
        const {data} = await api.post(`/api/admin/products/`,product)
        console.log("created products ",data)
        dispatch({type:CREATE_PRODUCT_SUCCESS,payload:data})
    }
    catch(error) {
dispatch({type:CREATE_PRODUCT_FAILURE,payload:error.message})
    }
}

export const deleteProduct = (productId) => async (dispatch) => {

    dispatch({ type:DELETE_PRODUCT_REQUEST})
    try {
        const {data} = await api.delete(`/api/admin/products/${productId}/delete`)
        console.log("delete product ",data)
        dispatch({type:DELETE_PRODUCT_SUCCESS,payload:productId})
    }
    catch(error) {
dispatch({type:DELETE_PRODUCT_FAILURE,payload:error.message})
    }
}

export const findProductsByCategory = (categoryName) => async (dispatch) => {

    dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST});

    try {
        const { data } = await api.get(`/api/products/category/${categoryName}`);
        console.log("products by category = ", data);
        dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS, payload: { categoryName, products: data } });
    }
    catch (error) {
        dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_FAILURE, payload: error.message });
    }
}
