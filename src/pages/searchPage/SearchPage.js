import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QueryParams from '../../utils/QueryParams';
import Search from '../../components/search/Search';
import searchApi from '../../api/movieTrends';
import style from './SearchPage.module.css';

export default class SearchPage extends Component {
  state = { search: [] };

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
    searchApi.fetchMovieSearch(query).then(search => {
      console.log(search);
      this.setState({ search: search.results });
    });
  };
  handleChangeQuery = query => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${query}`,
    });
  };

  render() {
    const { search } = this.state;
    const { match, location } = this.props;
    return (
      <>
        <section>
          <Search onSubmit={this.handleChangeQuery} />

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
