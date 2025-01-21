
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUST, CREATE_ORDER_SUCCESS, GET_ORDER_BY__ID_FAILURE, GET_ORDER_BY__ID_REQUST, GET_ORDER_BY__ID_SUCCESS } from "./ActionType";
import { api } from "../../config/apiConfig";


export const createOrder = (reqData)=>async (dispatch)=>
{
   console.log("data---",reqData);
    dispatch({type:CREATE_ORDER_REQUST});
    try{
         const {data} = await api.post(`api/orders/`,reqData.address);
         console.log(data);
         if(data.id){
            reqData.navigate({search:`step=3&order_id=${data.id}`});
         }
         console.log("created order - ",data);
         dispatch({
            type:CREATE_ORDER_SUCCESS,payload:data,
         });
      }
      catch(error)
      {
       console.log("catch error : ",error);
       dispatch({
        type:CREATE_ORDER_FAILURE,
        payload:error.message, 
       });
    }
};


export const getOrderById = (orderId)=>async (dispatch)=>
    {
        dispatch({type:GET_ORDER_BY__ID_REQUST});
        try{
             const {data} = await api.get(`api/orders/${orderId}`);
         // console.log("order by id ",data);
             dispatch({
                type:GET_ORDER_BY__ID_SUCCESS
                ,payload:data,
             });
          }
          catch(error)
          {
           console.log("catch error : ",error);
           dispatch({
            type:GET_ORDER_BY__ID_FAILURE,
            payload:error.message, 
           });
        }
    };