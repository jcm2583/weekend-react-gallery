import axios from 'axios'
import {useState} from 'react'

function GalleryItem ({picture, getPictures, pictureGallery}) {
    
    // create a state that can be used to toggle between the image and a description
    const [ isFlipped, setIsFlipped] = useState(false);

    console.log(isFlipped);
    
    // const handleFlip = () => {

    //     if (picture.showingImage == true) {
    //         return ()
    //     }
    // }
    
    
    
    return (
        <div> 
            <div className="flex-box-display-child" onClick={ () => setIsFlipped(true)}>
                {isFlipped ? (
                <div>
                    <img src={picture.path} alt="An image of something that is important to me" />
                </div>
                ) : (
                <div>
                    <p>{picture.description}</p>
                </div>
            )}
            </div>

            <div>
                <button>Like</button>
                <p>Likes: {picture.likes}</p>
            </div>




        </div>
    )
}

export default GalleryItem;