

import {LOGIN} from '../actions/types'
const initialState ={

}

export default function(state=initialState,action){
    switch(action.type){
        case LOGIN:
            return {
                ...state
            }
        default:
            return state
        }
}