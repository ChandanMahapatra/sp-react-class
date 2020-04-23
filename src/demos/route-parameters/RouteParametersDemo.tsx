import React from 'react';
import { Switch, useRouteMatch, Route, useParams, Link } from 'react-router-dom';

function RouteParametersDemo() {
  const parentUrl = useRouteMatch().url;
  const paramValues = [1, 2, 'bar', 'baz', 'John', 3, 4];

  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <ul>
            <li><Link to={`${parentUrl}/param/Foo`}>Param: Foo</Link></li>
            {
              paramValues.map(v => (
                <li key={v}><Link to={`${parentUrl}/param/${v}`}>Param: {v}</Link></li>
              ))
            }
          </ul>
        </div>
        <div className="col">
          <Switch>
            <Route path={`${parentUrl}/param/:id`}>
              <RouteParamDisplay />
            </Route>
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}

function RouteParamDisplay() {
  const params = useParams<{id: string}>();
  return <p>The param <em>id</em> has the value [ {params.id} ]</p>;
}

export default RouteParametersDemo;
