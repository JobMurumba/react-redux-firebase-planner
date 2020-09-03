import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import {Provider,useSelector} from 'react-redux';
import {createFirestoreInstance} from 'redux-firestore'
import  firebase from './config/fbConfig'
import {ReactReduxFirebaseProvider, isLoaded} from 'react-redux-firebase'
const rrfConfig = {
  userProfile:'users',
  useFirestoreForProfile:true,
 
}
const rrfProps = {
firebase,
config:rrfConfig,

dispatch:store.dispatch,
createFirestoreInstance,

}








function AuthIsLoaded ({children}){
  const auth = useSelector(state=>state.firebase.auth)
  if(!isLoaded(auth)) return <div>Loading...</div> 
    return children
}


  
  

ReactDOM.render(
  <React.StrictMode><Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
    <AuthIsLoaded > <App /> </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
