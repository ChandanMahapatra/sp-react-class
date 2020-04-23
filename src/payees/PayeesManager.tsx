import React from 'react';
import { Switch, Route, Link, useRouteMatch, useHistory } from 'react-router-dom';
import PayeesSearch from './PayeesSearch';
import PayeesList from './PayeesList';
import PayeesForm from './PayeesForm';

/*
Routed-to components always have access to 
- history
- location
- match
*/

function PayeesManager() {
  const match = useRouteMatch();
  const parentUrl = match.url;

  // http://esri.com/some/dir/app/ourApp/payees/search
  // http://esri.com/some/dir/app/ourApp  <>     /payees/search

  // index.html
  // <base href="/some/dir/app/ourApp">
  // or
  // App.tsx
  // <Route basename="/some/dir/app/ourApp"> ... </Router>
  // match.url = /payees

  const history = useHistory();

  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <h3>Payees Manager</h3>
          <nav>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to={`${parentUrl}/search`}>Search</Link>
              </li>
              <li className="list-inline-item">
                <Link to={`${parentUrl}/browse`}>Browse</Link>
              </li>
              <li className="list-inline-item">
                <Link to={`${parentUrl}/add`}>Add a Payee</Link>
              </li>
              {/*
              <li className="list-inline-item">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => history.push(`${parentUrl}/search`)}
                >
                  Search
                </button>
              </li>
              */}
            </ul>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Switch>
            <Route path={`${parentUrl}/search`}>
              <PayeesSearch />
            </Route>
            <Route path={`${parentUrl}/browse`}>
              <PayeesList />
            </Route>
            <Route path={`${parentUrl}/add`}>
              <PayeesForm />
            </Route>
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}

export default PayeesManager;
