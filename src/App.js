import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Trends from './pages/trends/Trends';
import SearchPage from './pages/searchPage/SearchPage';
import Header from './components/header/Header.js';
import DetailsPage from './pages/detailsPage/DetailsPage';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Switch>
            <Route path="/" exact component={Trends} />
            <Route path="/search" exact component={SearchPage} />
            <Route path="/movie/:id" component={DetailsPage} />
            <Redirect to="/" />
          </Switch>
        </main>
      </>
    );
  }
}
