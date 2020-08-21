import React, { Component } from 'react';
import rewApi from '../../api/movieTrends';
import Spinner from '../../utils/Spinner';

export default class Reviews extends Component {
  state = {
    rews: null,
    loading: false,
  };
  componentDidMount() {
    this.setState({ loading: true });
    rewApi
      .fetchMovieReviews(this.props.match.params.id)
      .then(rews => {
        console.log(rews);
        this.setState({ rews: rews.results });
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }
  render() {
    const { rews, loading } = this.state;
    return (
      <section>
        {loading && <Spinner />}
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
