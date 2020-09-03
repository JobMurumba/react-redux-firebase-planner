import {CREATE_PROJECT, CREATE_PROJECT_ERROR} from '../actions/types'

const initialState ={
    projects:[
        {id:'1',title:"help me peach",content:"blah"},
        {id:'1',title:"help me peach",content:"blah"},
        {id:'1',title:"help me peach",content:"blah"}
    ],
    errors:""
}

export default function(state=initialState,action){
    switch(action.type){
        case CREATE_PROJECT:
            return {
                ...state,
                projects:[...state.projects,action.payload]
            }
        case CREATE_PROJECT_ERROR:
            return{
                ...state,
                errors:action.payload
            }
        default:
            return state
        }
}