import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from '../pages/Menu';
import Directories from '../pages/Directories';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Menu} />
        <Route path="/repositories" component={Directories} />
    </Switch>
);

export default Routes;