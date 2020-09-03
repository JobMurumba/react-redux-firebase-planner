import {CREATE_PROJECT,CREATE_PROJECT_ERROR} from './types'
import  firebase from '../config/fbConfig'

export const createProject = (project)=>(dispatch,getState)=>{
    const firestore = firebase.firestore();
    firestore.collection('projects').add({
        ...project,
        authorFirstName:'Jane',
        authorLastName:'haenda',
        authorId:'12345',
        createdAt:new Date()

    }).then(()=>{
        dispatch({
            type:CREATE_PROJECT,
            payload:project
        })
    }).catch((err)=>{
        console.log(err)
        dispatch({
            type:CREATE_PROJECT_ERROR,
            payload:err
        })
    })
    
}