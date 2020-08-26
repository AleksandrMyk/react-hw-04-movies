import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import trendsApi from '../../api/movieTrends';
import style from './Trends.module.css';
import Spinner from '../../utils/Spinner';

export default class Trends extends Component {
  state = {
    trends: [],
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    trendsApi
      .fetchMovieTrends()
      .then(data => {
        console.log(data);
        this.setState({ trends: data.results });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { trends, loading } = this.state;

    return (
      <>
        <section>
          <h1>Trending today</h1>
          {loading && <Spinner />}
          <ul className={style.listTrends}>
            {trends.map(trend => (
              <li className={style.itemsTrends} key={trend.id}>
                <Link
                  to={{
                    pathname: `/movie/${trend.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  <div
                    className={style.imgBox}
                    style={
                      trend.backdrop_path
                        ? {
                            backgroundImage: `url(https://image.tmdb.org/t/p/original${trend.backdrop_path})`,
                          }
                        : {
                            backgroundImage:
                              'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSAUmka06uFKW8BxmZXi8uH_N1euTnUnTWmhQ&usqp=CAU)',
                          }
                    }
                  ></div>
                  <div className={style.boxTrends}>
                    <span className={style.nameTrends}>
                      {trend.title || trend.name}
                    </span>
                    <span className={style.spanTrends}>
                      Vote average: {trend.vote_average}
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
