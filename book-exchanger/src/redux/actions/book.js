import axios from "axios"
import {server} from "../store"

export const addBook = (formdata) => async(dispatch)=>{
    try {
        dispatch({type:"addBookRequest"})
        const { data } = await axios.post(`${server}/addBook`, formdata, {
            "withCredentials": true,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            file: formdata.file
        })

        dispatch({type:"addBookSuccess",payload:{book:data,message:"Book added successfully"}})
        // const res = await response.json();
        // console.log(data);

    } catch (error) {
        // console.log(error.response.data);
        dispatch({type:"addBookFail",payload:error.response.data.message})
    }
}