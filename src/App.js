import React  from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import { Route, Switch  } from 'react-router-dom';
import { withRouter } from "react-router";
import 'materialize-css/dist/css/materialize.min.css';

const App = () => {
  return (
      <>
        <Navbar/>
        <div className="App">
          <Switch path="/">
            <Route exact path="/" component={Home}/>
            <Route path="/signin" component={SignIn}/>
            <Route path="/signup" component={SignUp}/>
          </Switch>
        </div>
      </>
  )
}

export default withRouter(App);