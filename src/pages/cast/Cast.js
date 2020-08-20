import React, { Component } from 'react';
import actorsApi from '../../api/movieTrends';
import style from './Cast.module.css';

export default class Cast extends Component {
  state = {
    actors: null,
  };
  componentDidMount() {
    actorsApi.fetchMovieActors(this.props.match.params.id).then(actors => {
      console.log(actors);
      this.setState({ actors: actors.cast });
    });
  }
  render() {
    const { actors } = this.state;
    return (
      <section>
        {actors && (
          <ul className={style.list}>
            {actors.map(({ credit_id, name, character, profile_path }) => (
              <li key={credit_id} className={style.item}>
                <div className={style.box}>
                  {profile_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w400${profile_path}`}
                      alt={name}
                      width="40px"
                      className={style.image}
                    />
                  )}
                  <p className={style.name}>{name}</p>
                  <p className={style.char}>Character: {character}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}
