import axios from 'axios'
import { useState } from 'react'

function GalleryItem({ picture, getPictures, pictureGallery }) {

    // create a state that can be used to toggle between the image and a description
    const [isFlipped, setIsFlipped] = useState(false);
    // log that state to make sure that it is showing correctly
    // console.log(isFlipped);

    // create a function that will add likes and keep track of the number when a user clicks the like button
    const likePic = () => {
        // need to create an object that adds the likes and sends that data to the server
        const data = {
            likes: picture.likes + 1
        }
        // use axios to send that data to the server
        axios.put(`/gallery/like/${picture.id}`, data)
            .then(response => {
                console.log(response);
                // re-render getPictures to display on the DOM
                getPictures();
            }).catch(err => {
                console.log('There was an error in the PUT route', err);
            });
    }

    return (
        <div>
            <div className="flex-box-display-child" onClick={() => setIsFlipped(!isFlipped)}>
                {isFlipped ? (
                    <div>
                        <p className="descriptionClass">{picture.description}</p>
                    </div>
                ) : (
                    <div>
                        <img src={picture.path} alt="An image of something that is important to me" />
                    </div>
                )}

            </div>

            <div>
                <button className="btn btn-outline-dark space-between" onClick={likePic}>Like</button>
                <p className="likeDisplay">{picture.likes} people like this!</p>
            </div>
        </div>
    )
}

export default GalleryItem;