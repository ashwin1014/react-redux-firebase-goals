import React from 'react';
import ReactDOM from 'react-dom';
import { firebaseApp } from './config';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter, Redirect  } from 'react-router-dom';
import App from './App';
import { logUser } from './actions';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
           const { email, phoneNumber } = user;
           let signedInType = email ? email:phoneNumber; 
           console.log(signedInType);
           store.dispatch(logUser(signedInType));
           console.log('User signed in')
        return <Redirect to='/'/>
    } else {
        console.log('User signed out')
        return <Redirect to='/signin'/>
    }
  }) 


ReactDOM.render(    
   <Provider store = {store}>
     <BrowserRouter>
         <App />
     </BrowserRouter>        
   </Provider>, 
 document.getElementById('root')
);

serviceWorker.unregister();
