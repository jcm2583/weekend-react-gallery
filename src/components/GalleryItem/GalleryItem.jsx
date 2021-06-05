import axios from 'axios'
import { useState } from 'react'

function GalleryItem({ picture, getPictures, pictureGallery }) {

    // create a state that can be used to toggle between the image and a description
    const [isFlipped, setIsFlipped] = useState(false);
    // log that state to make sure that it is showing correctly
    // console.log(isFlipped);

    const likePic = () => {

        const data = {
            likes: picture.likes + 1
        }

        axios.put(`/gallery/like/${picture.id}`, data)
            .then(response => {
                console.log(response);
                getPictures();
            }).catch(err => {
                console.log('There was an error in the PUT route', err);
            });

            console.log(picture);

    }

    return (
        <div>
            <div className="flex-box-display-child" onClick={() => setIsFlipped(!isFlipped)}>
                {isFlipped ? (
                    <div>
                        <p>{picture.description}</p>
                    </div>
                ) : (
                    <div>
                        <img src={picture.path} alt="An image of something that is important to me" />
                    </div>
                )}

            </div>

            <div>
                <button onClick={likePic}>Like</button>
                <p>Likes: {picture.likes}</p>
            </div>
        </div>
    )
}

export default GalleryItem;