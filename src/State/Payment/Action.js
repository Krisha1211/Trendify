import { UPDATE_CART_ITEM_REQUEST } from "../Cart/ActionType";
import { CREATE_PAYMENT_FAILURE, CREATE_PAYMENT_REQUEST } from "./ActionType"
import { api } from "../../config/apiConfig";

export const createPayment= (orderId)=>async (dispatch)=>
{ 
    console.log(orderId)
    dispatch({type:CREATE_PAYMENT_REQUEST})
    try{
    const {data}= await api.post(`/api/payments/${orderId}`);
    console.log("data njasnd111",data)
    if(data.payment_link_url)
        {
            window.location.href=data.payment_link_url;
        }    
    }
    catch(error)
    {
   dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message})
    }
}


export const updatePayment= (reqData)=>async (dispatch)=>
    {
        dispatch({type:UPDATE_CART_ITEM_REQUEST})
        try{
        const {data}= await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);
        console.log("update payment :- ",data)

        }
        catch(error)
        {
       dispatch({type:CREATE_PAYMENT_FAILURE,payload:error.message})
        }
    }