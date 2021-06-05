import axios from 'axios'
import {useState} from 'react'

function GalleryItem ({picture, getPictures, pictureGallery}) {
    
    
    
    
    return (
        <div>


            <div className="flex-box-display-child">
                <img src={picture.path} alt="An image of something that is important to me" />
                <button>Like</button>
                <p>Likes: {picture.likes}</p>
            </div>




        </div>
    )
}

export default GalleryItem;