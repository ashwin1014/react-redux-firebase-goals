import React  from 'react';
import { firebaseApp } from './config';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import 'materialize-css/dist/css/materialize.min.css';
import { createBrowserHistory  } from 'history'
import { Router, Route, Switch  } from 'react-router-dom';


const history = createBrowserHistory();

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
      const { email } = user;
      // store.dispatch(logUser(email));
      // history.push('/')
      console.log('User signed in')
  }else {
      history.push('/signin')
      console.log('User signed out')
  }
}) 

const App = () => {
  return (
    <Router history={ history }>
     <Navbar/>
      <div className="App">
        <Switch path="/">
          <Route exact path="/" component={Home}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signup" component={SignUp}/>
        </Switch>
      </div>
   </Router>
  )
}

export default App;