import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from './App';
import Public from '../src/components/Public/Public';
import Protected from '../src/components/Protected/Protected';
import Auth from './Auth';

const Router = (props) => (
  
    <Switch>
      <Route exact path='/' component={Public}/>
      <PrivateRoute path="/protected" component={Protected} />
    </Switch>
  
)

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);


export default Router;