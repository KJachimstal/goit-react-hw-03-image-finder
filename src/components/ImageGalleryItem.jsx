import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    const { src, alt, id } = this.props;
    return (
      <li className="gallery__item" key={id}>
        <img className="gallery__item-image" src={src} alt={alt} />
      </li>
    );
  }
}
