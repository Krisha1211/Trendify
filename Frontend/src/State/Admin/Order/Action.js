import { api } from "../../../config/apiConfig";
import { CONFIRMED_ORDER_FAILURE, CONFIRMED_ORDER_REQUEST, DELETE_ORDER_FAILURE, DELETE_ORDER_REQUEST, DELETE_ORDER_SUCCESS, DELIVERED_ORDER_FAILURE, DELIVERED_ORDER_REQUEST, DELIVERED_ORDER_SUCCESS, GET_ORDERS_FAILURE, GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, SHIP_ORDER_FAILURE, SHIP_ORDER_REQUEST, SHIP_ORDER_SUCCESS } from "./ActionType";

export const getOrders = () => async (dispatch)=> {
        dispatch({type:GET_ORDERS_REQUEST});
        try{
           const response = await api.get(`/api/admin/orders/`);
           console.log("get all orders ",response.data);
           dispatch({type:GET_ORDERS_SUCCESS,payload:response.data});
        }
        catch(error)
        {
            dispatch({type:GET_ORDERS_FAILURE,payload:error.message})
        }        
    }

    export const confirmOrder = (orderId) => async (dispatch)=> {
            dispatch({type:CONFIRMED_ORDER_REQUEST});
            try{
               const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
               console.log("confirmed orders ",response.data);
               dispatch({type:GET_ORDERS_SUCCESS,payload:response.data});
            }
            catch(error)
            {
                dispatch({type:CONFIRMED_ORDER_FAILURE,payload:error.message})
            }        
        }


        export const shippedOrder = (orderId) => async (dispatch)=> {
            dispatch({type:SHIP_ORDER_REQUEST});
            try{
               const response = await api.put(`/api/admin/orders/${orderId}/ship`);
               console.log("shipped orders ",response.data);
               dispatch({type:SHIP_ORDER_SUCCESS,payload:response.data});
            }
            catch(error)
            {
                dispatch({type:SHIP_ORDER_FAILURE,payload:error.message})
            }        
        }
    
        export const deliveredOrder = (orderId) => async (dispatch)=> {
            dispatch({type:DELIVERED_ORDER_REQUEST});
            try{
               const response = await api.put(`/api/admin/orders/${orderId}/deliver`);
               console.log("confirmed orders ",response.data);
               dispatch({type:DELIVERED_ORDER_SUCCESS,payload:response.data});
            }
            catch(error)
            {
                dispatch({type:DELIVERED_ORDER_FAILURE,payload:error.message})
            } 
        }
            export const deleteOrder = (orderId) => async (dispatch)=> {
                dispatch({type:DELETE_ORDER_REQUEST});
                try{
                   const response = await api.delete(`/api/admin/orders/${orderId}/delete`);
                   console.log("confirmed orders ",response.data);
                   dispatch({type:DELETE_ORDER_SUCCESS,payload:response.data});
                }
                catch(error)
                {
                    dispatch({type:DELETE_ORDER_FAILURE,payload:error.message})
                } 
            }
             

