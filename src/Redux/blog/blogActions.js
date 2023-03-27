import axios from "axios"
import { BLOG_ADD_FAILURE, BLOG_ADD_REQUEST, BLOG_ADD_SUCCESS } from "./blogTypes"

export const addblog = (creds) => async(dispatch) =>{
    console.log(creds);
    dispatch({type:BLOG_ADD_REQUEST})
    try {
        let res = await axios.post(`http://localhost:5000/blog/addblog`,creds)
        console.log(res.data);
        dispatch({type:BLOG_ADD_SUCCESS,payload:res.data})
    } catch (error) {
        dispatch({type:BLOG_ADD_FAILURE})
    }
} 