import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Result from '../dashboard/Result';
import Scan from '../dashboard/Scan';

const DashboardRouter = () => (
    <Switch>
        <Route component={Scan} path="/scan" />
        <Route component={Result} path="/result" />
    </Switch>
);

export default DashboardRouter;
