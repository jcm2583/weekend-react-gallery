import React from 'react';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';


function App() {

  //create a state will store the images
  const [pictureGallery, setPictureGallery] = useState([])

  useEffect( () => {
    getPictures()
  }, [])


  const getPictures = () => {
    // need to access the pictures from the server
    console.log('GET request has been triggered');
    // use axios to get pics from /gallery path
    axios.get('/gallery').then( response => {
      console.log(response);
      setPictureGallery(response.data);
    }).catch ( err => {
      console.log('There was an error in the GET route', err);
    });
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <h2>Some things that are most important to me...</h2>
        <main>
        <GalleryList pictureGallery={pictureGallery} getPictures={getPictures}/>
        </main>
      </div>
    );
}

export default App;
