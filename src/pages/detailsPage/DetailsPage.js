import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import aboutApi from '../../api/movieTrends';
import style from './DetailsPage.module.css';
import Details from '../../components/details/Details';
import Cast from '../cast/Cast';
import Reviews from '../reviews/Reviews';
import Spinner from '../../utils/Spinner';
// import NotFound from '../../components/notfound/NotFound';

export default class DetailsPage extends Component {
  state = {
    movies: null,
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    aboutApi
      .fetchMovieAbout(this.props.match.params.id)
      .then(movies => {
        console.log(movies);
        this.setState({ movies });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push('/search');
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <>
        {loading && <Spinner />}
        {movies && <Details details={movies} />}
        <button className={style.goBack} onClick={this.handleGoBack}>
          Go back
        </button>
        <section>
          <h2 className={style.addInfo}>Additional information</h2>
          <ul className={style.linkBox}>
            <li className={style.linkItems}>
              <NavLink
                to={{
                  pathname: `${this.props.match.url}/cast`,
                  state: { from: this.props.location },
                }}
                className={style.cast}
                activeClassName={style.activeClassName}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: `${this.props.match.url}/review`,
                  state: { from: this.props.location },
                }}
                className={style.rewiew}
                activeClassName={style.activeClassName}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <Switch>
            <Route
              path={`${this.props.match.path}/cast`}
              component={Cast}
              exact
            />
            <Route
              path={`${this.props.match.path}/review`}
              component={Reviews}
            />
          </Switch>
        </section>
      </>
    );
  }
}
