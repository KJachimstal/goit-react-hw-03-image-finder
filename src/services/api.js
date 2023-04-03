import axios from 'axios';

export const fetchImagesWithQuery = async searchQuery => {
  const response = await axios.get('https://pixabay.com/api/?', {
    params: {
      key: '34705219-9da54ac0294187b037daf6e50',
      q: searchQuery,
      image_type: 'photo',
      safesearch: true,
    },
  });
  return response.data.hits;
};
