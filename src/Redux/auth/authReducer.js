import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./authTypes"

// Login reducer
const initStateLogin = {
    isAuth:false,
    isLoading:false,
    isError:false
}
export const loginReducer = (state = initStateLogin,{type,payload}) =>{

    switch(type){
        case LOGIN_REQUEST:{
            return {
                ...state,
                isAuth:false,
                isLoading:true,
                isError:false
            }
        }
        case LOGIN_SUCCESS:{
            return{
                ...state,
                isAuth:payload,
                isError:false,
                isLoading:false
            }
        }
        case LOGIN_FAILURE:{
            return {
                ...state,
                isAuth:false,
                isLoading:false,
                isError:true
            }
        }
        default:{
            return state
        }
    }
}  


// Signup reducer
const initStateSignup = {
    isAuth:false,
    isLoading:false,
    isError:false
}
export const signupReducer = (state = initStateSignup,{type,payload}) =>{

    switch(type){
        case SIGNUP_REQUEST:{
            return {
                ...state,
                isAuth:false,
                isLoading:true,
                isError:false
            }
        }
        case SIGNUP_SUCCESS:{
            return{
                ...state,
                isAuth:payload,
                isError:false,
                isLoading:false
            }
        }
        case SIGNUP_FAILURE:{
            return {
                ...state,
                isAuth:false,
                isLoading:false,
                isError:true
            }
        }
        default:{
            return state
        }
    }
}  