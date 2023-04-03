import { Component } from 'react';

export class Searchbar extends Component {
  render() {
    return (
      <header class="search-bar">
        <form class="search-form">
          <input
            class="search-form__input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
          <button type="submit" class="search-form__button">
            <span class="search-form__button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
