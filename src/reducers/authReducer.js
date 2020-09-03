

import {LOGIN_SUCCESS,LOGIN_ERROR,SIGNOUT_SUCCESS,SIGNUP_SUCCESS, SIGNUP_ERROR} from '../actions/types'
const initialState ={
    authenticated:false,
    authError:null
}

export default function(state=initialState,action){
    switch(action.type){
        case LOGIN_SUCCESS:
            return {
                ...state,
                authenticated:true,
                authError:null
            }
        case LOGIN_ERROR:
            
            return {
                ...state,
                authError:action.payload
            }
        case SIGNOUT_SUCCESS:
            return{
                ...state,
                authenticated:false
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                authError:null,
            }
        case SIGNUP_ERROR:
            return{
                ...state,
                authError:action.payload.message
            }
        default:
            return state
        }
}