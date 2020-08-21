import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QueryParams from '../../utils/QueryParams';
import Search from '../../components/search/Search';
import searchApi from '../../api/movieTrends';
import style from './SearchPage.module.css';
import Spinner from '../../utils/Spinner';

export default class SearchPage extends Component {
  state = {
    search: [],
    loading: false,
  };

  componentDidMount() {
    const { query } = QueryParams(this.props.location.search);
    if (query) {
      this.fetchSearch(query);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = QueryParams(prevProps.location.search);
    const { query: nextQuery } = QueryParams(this.props.location.search);

    if (prevQuery !== nextQuery) {
      this.fetchSearch(nextQuery);
    }
  }

  fetchSearch = query => {
    this.setState({ loading: true });
    searchApi
      .fetchMovieSearch(query)
      .then(search => {
        console.log(search);
        this.setState({ search: search.results });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  handleChangeQuery = query => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { search, loading } = this.state;
    const { location } = this.props;
    return (
      <>
        <section>
          <Search onSubmit={this.handleChangeQuery} />
          {loading && <Spinner />}
          <ul className={style.list}>
            {search.map(({ id, title, popularity, release_date }) => (
              <li key={id} className={style.items}>
                <div className={style.box}>
                  <Link
                    to={{
                      pathname: `/movie/${id}`,
                      state: { from: location },
                    }}
                    className={style.link}
                  >
                    <p className={style.title}>{title} </p>
                    <p className={style.pop}>Popularity: {popularity}%</p>
                    <p className={style.date}>Release_date: {release_date} </p>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
