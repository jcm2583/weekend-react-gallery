import GalleryItem from '../GalleryItem/GalleryItem'

function GalleryList({ pictureGallery, getPictures }) {




    return (

        <div>
            {pictureGallery.map(picture => {

                return (
                    <GalleryItem key={picture.id} picture={picture} getPictures={getPictures} />
                )
            })}
        </div>
    )
}

export default GalleryList;