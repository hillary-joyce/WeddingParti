import React, {Component} from "react";
import AddImageButton from "../../components/AddImageButton";
import Image from "../../components/Image";
import API from "../../utils/API";

class ImageGallery extends Component {
  state = {
    images: [
      {
        imageId: 1,
        url: "www.google.com"
      }
    ],
    imageURL: "",
    description: ""
  };

  componentDidMount() {
    this.loadImages();
  }

  loadImages = () => {
    API.getPhotos(this.props.match.params.weddingId)
      .then(res =>
        this.setState({ images: res.data})
      )
      .catch(err => console.log(err));
  }
  render() {
    return (

      <ImageGallery>
      <AddImageButton />
        {this.state.images.map(image => {
          return (
            <Image
              key={image.imageId}
              value={image.imageId}
              src={image.url}
            />
          );
        })}
        </ImageGallery>
    )
  }

}

export default ImageGallery;
