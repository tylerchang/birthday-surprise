import React, {Component} from 'react'

import Home from './components/Home/Home';
import Card from './components/Card/Card';
import Video from './components/Video/Video';
import PhotoPage from './components/PhotoPage/PhotoPage';

import './App.css';


class App extends Component{

  state = {
    showHome: true,
    showCard: false,
    showGallery: false,
    showVideo: false
  }

  showCardHandler = (props) => {
    this.setState({showHome: false, showCard: true});
  }

  showPhotoPageHandler = (props) => {
    this.setState({showCard: false, showGallery: true});
  }

  showVideoHandler = (props) => {
    this.setState({showGallery: false, showVideo: true});
  }

  showHomeHandler = (props) => {
    this.setState({showHome: true, showVideo: false})
  }


  render(){

    return(
      <div> 
        <Home show={this.state.showHome} nextPage={this.showCardHandler} />
        <Card show={this.state.showCard} nextPage={this.showPhotoPageHandler} />
        <PhotoPage show={this.state.showGallery} nextPage={this.showVideoHandler} />
        <Video show={this.state.showVideo} nextPage={this.showHomeHandler}/>
      </div>
    );

  }

}

export default App;
