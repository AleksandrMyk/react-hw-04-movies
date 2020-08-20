import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import trendsApi from '../../api/movieTrends';
import style from './Trends.module.css';

export default class Trends extends Component {
  state = {
    trends: [],
  };

  componentDidMount() {
    trendsApi.fetchMovieTrends().then(data => {
      console.log(data);
      this.setState({ trends: data.results });
    });
  }

  render() {
    const { trends } = this.state;

    return (
      <>
        <section>
          <h1>Trending today</h1>
          <ul className={style.listTrends}>
            {trends.map(trend => (
              <li className={style.itemsTrends} key={trend.id}>
                <Link
                  to={{
                    pathname: `/movie/${trend.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  <div className={style.boxTrends}>
                    <span className={style.nameTrends}>
                      {trend.title || trend.name}
                    </span>
                    <span className={style.spanTrends}>
                      Vote average: {trend.vote_average}
                    </span>
                    <span className={style.spanTrends}>
                      Vote count: {trend.vote_count}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
