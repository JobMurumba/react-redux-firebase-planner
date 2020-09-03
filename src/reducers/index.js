import {combineReducers} from 'redux'
import auth from './authReducer'
import  project from './projectReducer' 
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
export default combineReducers({
 auth,
 project,
 firestore:firestoreReducer,
 firebase:firebaseReducer
})