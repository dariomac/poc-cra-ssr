import React from 'react';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Page from './components/Page';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router';
import { addTodo } from './actions';

import './App.css';

const NoMatch = () => (
  <div>
    <h1>404</h1>
    React Page Not Found
  </div>
);

const AppRoutes = ({ store }) => (
  <Switch>
    <Route path="/" component={Home} exact />
    {/* <Route path="/page" component={Page} exact /> */}
    <Route path="/page" render={() => {
      if (store) {
        // Bad & ugly just to change the store server side through actions before rendering
        store.dispatch(addTodo('This should come renderer from server (on /Page direct hit)'));  
      }
      
      return <Page />; 
    }} exact />
    <Route render={NoMatch} />
  </Switch>
)

function App (props) {
  return (
    <Provider store={props.store}>
      {
        props.location
        ? (
          <StaticRouter location={props.location} context={{}}>
            <AppRoutes store={props.store}/>
          </StaticRouter>
        ) : (
          <BrowserRouter>
            <AppRoutes/>
          </BrowserRouter>  
        )
      }
    </Provider>
  );
}
export default App;
