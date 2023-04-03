import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li className="gallery__item">
        <img
          className="gallery__item-image"
          src={this.props.src}
          alt={this.props.alt}
        />
      </li>
    );
  }
}
