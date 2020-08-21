import React, { Component } from 'react';
import actorsApi from '../../api/movieTrends';
import Spinner from '../../utils/Spinner';
import style from './Cast.module.css';

export default class Cast extends Component {
  state = {
    actors: null,
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    actorsApi
      .fetchMovieActors(this.props.match.params.id)
      .then(actors => {
        console.log(actors);
        this.setState({ actors: actors.cast });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    const { actors, loading } = this.state;
    return (
      <section>
        {loading && <Spinner />}
        {actors && (
          <ul className={style.list}>
            {(actors.length > 0 &&
              actors.map(({ credit_id, name, character, profile_path }) => (
                <li key={credit_id} className={style.item}>
                  <div className={style.box}>
                    {(profile_path && (
                      <img
                        src={`https://image.tmdb.org/t/p/w400${profile_path}`}
                        alt={name}
                        width="40px"
                        className={style.image}
                      />
                    )) || (
                      <img
                        src={`https://wiki.bravofleet.com/images/4/43/No-avatar.png`}
                        alt={name}
                        width="40px"
                        className={style.image}
                      />
                    )}
                    <p className={style.name}>{name}</p>
                    <p className={style.char}>Character: {character}</p>
                  </div>
                </li>
              ))) || <p>There are no casts</p>}
          </ul>
        )}
      </section>
    );
  }
}
