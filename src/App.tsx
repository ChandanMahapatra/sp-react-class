import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import './App.css';
import Greeter from './Greeter';
import CategoriesManager from './CategoriesManager';
import PayeesManager from './payees/PayeesManager';
import TransactionsManager from './TransactionsManager';
import DemosManager from './demos/DemosManager';

function App() {
  return (
    <Router>
      <main className="container">
        <header className="row">
          <div className="col">
            <h1>Not Really Banking Bank</h1>
            <nav>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link to="/demos">Demos</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/categories">Categories</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/payees">Payees</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/transactions">Transactions</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div>
          <Switch>
            <Route path="/demos">
              <DemosManager />
            </Route>
            <Route path="/categories">
              <CategoriesManager />
            </Route>
            <Route path="/payees">
              <PayeesManager />
            </Route>
            <Route path="/transactions">
              <TransactionsManager />
            </Route>
            <Route path="/" exact>
              <h3>Home</h3>
            </Route>
            <Route>
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
        <footer className="row">
          <div className="col">
            <p>
              Copyright &copy;2020 the Not Really Banking corporation. <br />
              <small>
                No actual resemblance to anything any company is really doing is expressed
                or implied.
              </small>
            </p>
          </div>
        </footer>
      </main>
    </Router>
  );
}

export default App;
