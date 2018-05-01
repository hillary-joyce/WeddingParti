import React, { Component } from "react";
import AddImageButton from "../../components/AddImageButton";
import ImageGallery from "../../components/ImageGallery";
import API from "../../utils/API";
import moment from "moment";


class PhotoGalleryPage extends Component {
  state = {
    weddingId: "",
    imgURL: "",
    imgDescription: "",
    photoGallery: []
  }

  componentDidMount() {
    this.setState({weddingId: this.props.weddingId},
      () => this.showImages())
  };

  handleInputChange = event => {
    const {
      name,
      value
    } = event.target;
    this.setState({
      [name]: value
    });
  };

  //Image Gallery Routes
  showImages = () => {
    API.getPhotos(this.state.weddingId)
      .then(res => this.setState({
        photoGallery: res.data.photoGallery
      }))
      .catch(err => console.log(err))
  };

  addImage = event => {
    event.preventDefault();
    API.addPhotos(this.state.weddingId, {
        url: this.state.imgURL,
        description: this.state.imgDescription
      })
      .then(res => this.showImages())
      .catch(err => console.log(err))
  }


  render() {
    return (
    <div>
      <h1> Image Gallery </h1>
      <AddImageButton
        handleInputChange = {this.handleInputChange}
        imgURL = {this.state.imgURL}
        imgDescription = {this.state.imgDescription}
        addImage = {this.addImage}
      />
      <ImageGallery> {
        this.state.photoGallery.map(image =>
          <div className = "img" >
            <img src = {image.url} />
            <p> {image.description} </p>
          </div>
        )
      }
      < /ImageGallery>
      <button onClick = {this.showImages} > Show Images </button>
    </div>
    )
  }
}

export default PhotoGalleryPage;
