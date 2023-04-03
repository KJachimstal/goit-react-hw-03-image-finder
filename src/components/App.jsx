import { Component } from 'react';
import api from '../services/api';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Loader } from './Loader';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    const query = event.target.query.value;

    try {
      const images = await api.fetchImagesWithQuery(query);
      this.setState({ images });
    } catch (error) {
      this.setState({ error });
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { images, isLoading, error } = this.state;

    return (
      <div>
        <Searchbar handleSubmit={this.handleSubmit} />
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <Loader />}
      </div>
    );
  }
}
