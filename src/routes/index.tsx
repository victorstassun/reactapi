import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from '../pages/Menu';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Menu} />
    </Switch>
);

export default Routes;