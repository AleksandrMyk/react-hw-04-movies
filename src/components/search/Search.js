import React, { Component } from 'react';
import style from './Search.module.css';

export default class Search extends Component {
  state = { value: '' };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={style.input}
          placeholder="find your movie"
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button type="submit" className={style.btnSearch}>
          Search
        </button>
      </form>
    );
  }
}
