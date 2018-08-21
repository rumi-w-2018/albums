import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

const url = 'https://rallycoding.herokuapp.com/api/music_albums';

class AlbumList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: []
    };
  }

  componentDidMount() {
    // console.log('ComponentDidMount');
    // debugger;

    fetch(url)
      .then(response => {
        // console.log('response', response);
        if (response.ok) {
          return response.json();
        }
        console.log('Error');
        return [];
      })
      .then(json => {
        // console.log(json);
        this.setState({ albums: json });
      })
      .catch(error => {
        console.log('fetcg error:', error);
      });
  }

  renderAlbums = () => {
    // console.log('state', this.state.albums);
    return this.state.albums.map((album, i) => <AlbumDetail key={i.toString()} album={album} />);
  };

  render() {
    // console.log('this.state', this.state);
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
