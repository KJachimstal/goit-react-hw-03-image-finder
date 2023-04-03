import { Component } from 'react';
import { ImageGalleryItem } from './ImageGalleryItem';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export class ImageGallery extends Component {
  render() {
    const { images } = this.props;
    return (
      <ul className="gallery">
        {images.map(image => {
          return (
            <ImageGalleryItem
              src={image.previewURL}
              alt={image.tags}
              key={image.id}
            />
          );
        })}
      </ul>
    );
  }
}
