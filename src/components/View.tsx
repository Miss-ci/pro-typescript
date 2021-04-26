import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import router from '../router';

const View = () => {

  return (
    <>
      <Suspense fallback={<></>}>
        <Router>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/dashboard' />
            </Route>
            {
              router.map(r => (
                <Route 
                  path={r.path} 
                  key={r.path}
                  exact={r.exact} 
                >
                  {r.component}
                </Route>
              ))
            }
            <Redirect to='/404' />
          </Switch>
        </Router>
      </Suspense>
    </>
  )
};
export default View;