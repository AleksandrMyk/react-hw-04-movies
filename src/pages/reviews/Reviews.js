import React, { Component } from 'react';
import rewApi from '../../api/movieTrends';
// import style from './Reviews.module.css';

export default class Reviews extends Component {
  state = {
    rews: null,
  };
  componentDidMount() {
    rewApi.fetchMovieReviews(this.props.match.params.id).then(rews => {
      console.log(rews);
      this.setState({ rews: rews.results });
    });
  }
  render() {
    const { rews } = this.state;
    return (
      <section>
        {rews && (
          <ul>
            {rews.map(({ author, id, content }) => (
              <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}
