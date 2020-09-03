import firebase from  '../config/fbConfig';
import {LOGIN_SUCCESS,LOGIN_ERROR,SIGNOUT_SUCCESS} from './types';
export const signIn = (credentials)=>(dispatch,getState)=>{

    firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
    ).then(()=>{
        dispatch({
            type:LOGIN_SUCCESS,
            payload: "success"
        })
    }).catch(err=>{
        dispatch({
            type:LOGIN_ERROR,
            payload:"invalid credentials"
        })
    })

}

export const signOut = ()=>dispatch=>{
    firebase.auth().signOut().then(()=>{
        console.log("hey")
        dispatch({
            type:SIGNOUT_SUCCESS,
            payload:"success"
        })
    })

}