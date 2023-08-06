import axios from "axios"
import { server } from "../store"

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({type: "loadUser"});

        const {data} = await axios.get(`${server}/me`)

        dispatch({type: "loadUserSuccess", payload: data})
    } catch (error) {
        dispatch({type: "loadUserFail", payload: error.response.data.message})
    }
}