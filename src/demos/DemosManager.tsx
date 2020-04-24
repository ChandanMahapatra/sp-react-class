import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import * as lodash from 'lodash';
import EffectHook from './effect-hook/EffectHook';
import ContextDemo from './context-demo/ContextDemo';
import RouteParametersDemo from './route-parameters/RouteParametersDemo';

type RouteConfig = {
  link: string;
  component: any; // Cop-out because some demos are .js/jsx
  label?: string;
};

const routes: RouteConfig[] = [
  {
    link: 'effect-hook',
    component: EffectHook,
  },
  {
    link: 'context-api',
    component: ContextDemo,
    label: 'Context API',
  },
  {
    link: 'route-params',
    component: RouteParametersDemo,
  },
];

function DemosManager() {
  const parentUrl = useRouteMatch().url;
  return (
    <>
      <div className="row">
        <div className="col">
          <h3>Demos</h3>
          <ul className="list-unstyled">
            {routes.map(({ link, label }) => (
              <li key={link}>
                <Link to={`${parentUrl}/${link}`}>{label || lodash.startCase(link)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col">
          <Switch>
            {routes.map(({ link, component }) => (
              <Route key={link} path={`${parentUrl}/${link}`} component={component} />
            ))}
          </Switch>
        </div>
      </div>
    </>
  );
}

export default DemosManager;
