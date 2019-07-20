import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Images from './components/images/Images';
import AddImage from './components/images/AddImage';
import About from './components/pages/About';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    imagesList: []
  }

  componentDidMount() {
    // TODO get random images
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then(response => this.setState({ imagesList: response.data }))
  }

  // TODO Toggle Album
  /* toggleAlbum = (id) => {
    this.setState({ imagesList: this.state.imagesList.map(image => {
      if(image.id === id) {
        image.albumId = !image.albumId
      }
      return image;
    }) });
  } */

  deleteImage = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => this.setState({ imagesList: [...this.state.imagesList.filter(image => image.id !== id)] }));
  }

  addImage = (albumId, title, url, thumbnailUrl) => {
    axios.post('https://jsonplaceholder.typicode.com/photos', {
      albumId,
      title,
      url,
      thumbnailUrl
    })
      .then(response => this.setState({ images: [...this.state.imagesList, response.data] }));
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddImage addImage={this.addImage} />
                <Images images={this.state.imagesList} /* toggleAlbum={this.toggleAlbum} */ deleteImage={this.deleteImage} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>  
        </div>
      </Router>
    );
  }
}

export default App;
