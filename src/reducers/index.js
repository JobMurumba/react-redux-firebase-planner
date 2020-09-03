import {combineReducers} from 'redux'
import auth from './authReducer'
import  project from './projectReducer' 
import {firestoreReducer} from 'redux-firestore'
export default combineReducers({
 auth,
 project,
 firestore:firestoreReducer,
})