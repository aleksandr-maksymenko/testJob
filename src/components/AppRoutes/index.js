import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from 'config';
import NewsFeed from 'pages/NewsFeed';

import { Navigation } from '../Navigation';

import './AppRoutes.scss';

export const AppRoutes = () => (
  <div>
    <Navigation />
    <div className="component-container">
      <Switch>
        <Route exact path={routes.home} component={NewsFeed} />
      </Switch>
    </div>
  </div>
);
