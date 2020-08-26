import React from 'react';
import { Redirect } from 'react-router-dom';
import style from './Details.module.css';

const Details = ({
  details: {
    title,
    poster_path,
    popularity,
    overview,
    genres,
    tagline,
    release_date,
    runtime,
  },
}) => {
  return (
    <section className={style.section}>
      <div className={style.secBox}>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={title}
          className={style.image}
        />

        <div className={style.infoBox}>
          <div className={style.titleBox}>
            <h1 className={style.titleDet}>{title}</h1>
            <h4 className={style.tagline}>{tagline}</h4>
          </div>
          <p className={style.score}>User Score: {popularity}%</p>
          <p className={style.Release}>Release date: {release_date}</p>
          <p className={style.runtime}>runtime: {runtime} minutes</p>
          <p className={style.Overview}>Overview: {overview}</p>
          <p className={style.Genres}>Genres:</p>
          <ul className={style.listGenres}>
            {(genres &&
              genres.map(movie => (
                <li key={movie.id} className={style.itemGenres}>
                  <p className={style.nameGenres}>{movie.name}</p>
                </li>
              ))) || <Redirect to="/" />}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Details;
