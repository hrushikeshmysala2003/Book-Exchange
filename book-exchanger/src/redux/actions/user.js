import axios from "axios"
import {server} from "../store"


export const loginUser = (email, userPassword) => async (dispatch) => {
    try{
        dispatch({type: "loginRequest"});

        const {data} = await axios.post(`${server}/login`, {
            email, userPassword
        }, {
            "withCredentials": true,
            headers: {
                "Content-Type": "application/json"
            }
        });

        dispatch({type: "loginSuccess", payload: data});
    }catch(error){
        dispatch({type: "loginFail", payload: error.response.data.message})
    }



}