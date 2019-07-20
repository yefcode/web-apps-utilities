import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddImage extends Component {
  state = {
    albumId: '',
    title: '',
    url: '',
    thumbnailUrl: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addImage(this.state.albumId, this.state.title, this.state.url, this.state.thumbnailUrl);
    this.setState({ albumId: '', title: '', url: '', thumbnailUrl: '' });
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="albumId" 
          style={{ flex: '10', padding: '10px', margin: '10px' }}
          placeholder="Add Album Id ..." 
          value={this.state.albumId}
          onChange={this.onChange}
        />
        <input 
          type="text" 
          name="title" 
          style={{ flex: '10', padding: '10px', margin: '10px' }}
          placeholder="Add Image ..." 
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type="text" 
          name="url" 
          style={{ flex: '10', padding: '10px', margin: '10px' }}
          placeholder="Add url ..." 
          value={this.state.url}
          onChange={this.onChange}
        />
        <input 
          type="text" 
          name="thumbnailUrl" 
          style={{ flex: '10', padding: '10px', margin: '10px' }}
          placeholder="Add Thumbnail Url ..." 
          value={this.state.thumbnailUrl}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{flex: '1', margin: '10px'}}
        />
      </form>
    )
  }
}

// PropTypes
AddImage.propTypes = {
  addImage: PropTypes.func.isRequired
}

export default AddImage
