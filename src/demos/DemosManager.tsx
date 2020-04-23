import React from 'react';
import EffectHook from './effect-hook/EffectHook';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import ContextDemo from './context-demo/ContextDemo';

function DemosManager() {
  const parentUrl = useRouteMatch().url;
  return (
    <>
      <div className="row">
        <div className="col">
          <h3>Demos</h3>
          <ul className="list-unstyled">
            <li>
              <Link to={`${parentUrl}/effect-hook`}>useEffect Hook Demo</Link>
            </li>
            <li>
              <Link to={`${parentUrl}/context-demo`}>Context API</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <Switch>
            <Route path={`${parentUrl}/effect-hook`}>
              <EffectHook />
            </Route>
            <Route path={`${parentUrl}/context-demo`}>
              <ContextDemo />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default DemosManager;
