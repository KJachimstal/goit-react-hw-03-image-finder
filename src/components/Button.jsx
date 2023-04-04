import { Component } from 'react';

export class Button extends Component {
  render() {
    return (
      <button
        className="search-form__button load-more"
        onClick={this.props.handleLoadMore}
      >
        Load more
      </button>
    );
  }
}
