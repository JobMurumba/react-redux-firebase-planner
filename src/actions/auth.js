import firebase from  '../config/fbConfig';
import {LOGIN_SUCCESS,LOGIN_ERROR,SIGNOUT_SUCCESS,SIGNUP_SUCCESS,SIGNUP_ERROR} from './types';

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
       
        dispatch({
            type:SIGNOUT_SUCCESS,
            payload:"success"
        })
    })

}

export const signUp = (newuSer)=>dispatch=>{

   const firestore = firebase.firestore();
    firebase.auth().createUserWithEmailAndPassword(
        newuSer.email,
        newuSer.password
    ).then((res)=>{
        return firestore.collection('users').doc(res.user.uid).set({
            firstName:newuSer.firstname,
            lastName:newuSer.lastname,
            initials:newuSer.firstname[0] + newuSer.lastname[0]
        })
    }).then(()=>{
        dispatch({
            type:SIGNUP_SUCCESS,
            payload:"signup successfull"
        })
    }).catch(err=>{
        dispatch({
            type:SIGNUP_ERROR,
            payload:err
        })
    })
}