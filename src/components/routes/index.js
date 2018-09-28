import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../Login';
import Dashboard from '../dashboard/Dashboard';

import Authenticate from '../Authenticated';

const IndexRouter = () => (
    <Switch>
        <Route component={Login} exact path="/login" />
        <Route component={Authenticate(Dashboard)} path="/" />
    </Switch>
);

export default IndexRouter;
