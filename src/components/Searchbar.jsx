import { Component } from 'react';

export class Searchbar extends Component {
  render() {
    return (
      <header className="search-bar">
        <form className="search-form" onSubmit={this.props.handleSubmit}>
          <input
            className="search-form__input"
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
            name="query"
          />
          <button type="submit" className="search-form__button">
            <span className="search-form__button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
