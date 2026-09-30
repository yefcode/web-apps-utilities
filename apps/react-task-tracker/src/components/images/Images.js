import React, { Component } from 'react';
import ImageItem from './ImageItem';
import PropTypes from 'prop-types';

class Images extends Component {
  render() {
    return this.props.images.map((image) => (
      <ImageItem key={image.id} image={image} /* toggleAlbum={this.props.toggleAlbum} */ deleteImage={this.props.deleteImage} />
    ));
  }
}

// PropTypes
Images.propTypes = {
  images: PropTypes.array.isRequired,
  /* toggleAlbum: PropTypes.func.isRequired, */
  deleteImage: PropTypes.func.isRequired,
}

export default Images;