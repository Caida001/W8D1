import React from 'react';

import { Route, Link, Switch, Redirect, HashRouter} from 'react-router-dom';

import Greeting from './greeting_container';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container';
import SearchContainer from './search_container';
import BenchShowContainer from './bench_show_container';
import BenchFormContainer from './bench_form_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';



const App = () => {
  // debugger
  return (
    <div>
      <header>
        <Greeting />
        <h1>Bench BnB</h1>
      </header>

        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={BenchIndexContainer} />

    </div>
  );
};

export default App;
