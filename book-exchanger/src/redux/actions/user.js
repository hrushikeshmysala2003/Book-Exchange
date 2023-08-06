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

export const logoutUser = () => async (dispatch) => {
    try{
        dispatch({type: "logoutRequest"});

        const {data} = await axios.get(`${server}/logout`,{
            "withCredentials": true,
        });

        dispatch({type: "logoutSuccess", payload: data.message});
    }catch(error){
        dispatch({type: "logoutFail", payload: error.response.data.message})
    }
}

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({type: "loadUser"});

        const {data} = await axios.get(`${server}/me`, {
            withCredentials: true,
        })
        console.log(data);
        dispatch({type: "loadUserSuccess", payload: data})
    } catch (error) {
        dispatch({type: "loadUserFail", payload: error})
    }
}