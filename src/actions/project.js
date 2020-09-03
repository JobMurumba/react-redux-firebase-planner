import {CREATE_PROJECT,CREATE_PROJECT_ERROR} from './types'
import  firebase from '../config/fbConfig'

export const createProject = (project)=>(dispatch,getState)=>{
    const profile = getState().firebase.profile
    const firestore = firebase.firestore();
    const authorId = getState().firebase.auth.uid
    firestore.collection('projects').add({
        ...project,
        authorFirstName:profile.firstName,
        authorLastName:profile.lastName,
        authorId:authorId,
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