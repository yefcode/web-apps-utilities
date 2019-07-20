import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ImageItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.image.albumId ? 'line-through' : 'none'
    }
  }

  render() {
    /* const { albumId, id, title, url, thumbnailUrl } = this.props.image; */
    const { id, title } = this.props.image;
    return (
      <div style={this.getStyle()}>
        <p>
          {/* <input type="checkbox" onChange={this.props.toggleAlbum.bind(this, id)} /> {' '} */}
          { title }
          <button onClick={this.props.deleteImage.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}

ImageItem.propTypes = {
  image: PropTypes.object.isRequired,
  /* toggleAlbum: PropTypes.func.isRequired, */
  deleteImage: PropTypes.func.isRequired,
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default ImageItem
