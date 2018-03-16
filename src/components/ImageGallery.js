import React from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class MyComponent extends React.Component {
 
  render() {
 
    const images = [
      {
        original: 'https://i.imgur.com/FvKMl0Q.jpg',
        thumbnail: 'https://i.imgur.com/FvKMl0Q.jpg',
        description: 'Outdoor advertising is the world\'s oldest advertising medium, and there is a reason why: because it works!'
      },
      {
        original: 'https://i.imgur.com/N0oukqS.jpg',
        thumbnail: 'https://i.imgur.com/N0oukqS.jpg',
        description: 'Outdoor advertising is the world\'s oldest advertising medium.'
      },
      {
        original: 'https://i.imgur.com/mpM228L.jpg',
        thumbnail: 'https://i.imgur.com/mpM228L.jpg',
        description: 'Outdoor is big, bold and dynamic. Its larger-than-life proportions and endless creative options will grab and hold consumer attention.'
      }
    ]
 
    return (
      <ImageGallery items={images} />
    );
  }
 
}