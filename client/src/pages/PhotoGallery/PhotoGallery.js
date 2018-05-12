import React, { Component } from "react";
import AddImageButton from "../../components/AddImageButton";
import ImageGallery from "../../components/ImageGallery";
import Image from "../../components/Image"
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";


class PhotoGalleryPage extends Component {
  state = {
    weddingId: "",
    imgurl: "",
    url: "",
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
      .then(res => setTimeout(function() {
        this.setState({photoGallery: res.data.photoGallery})
      }.bind(this), 200)
      )
      .catch(err => console.log(err))
  };

  addImage = event => {
    event.preventDefault();
    API.addPhotos(this.state.weddingId, {
        url: this.state.url,
        imgurl: this.state.imgurl,
        description: this.state.imgDescription
      })
      .then(res => this.setState(
        {
          url: "",
          imgurl: "",
          imgDescription: ""
        }, this.showImages()))
      .catch(err => console.log(err))
  }


  render() {
    return (
    <div>
      <Nav>
        <ul className="navbar-links">
          <li className={window.location.pathname === "/wedding" ? "active" : ""}>
            <Link to="/wedding">Home</Link>
          </li>
          <li className={window.location.pathname === "/wedding/calendar" ? "active" : ""}>
            <Link to="/wedding/calendar">Calendar</Link>
          </li>
          <li className={window.location.pathname === "/wedding/photogallery" ? "active" : ""}>
            <Link to="/wedding/photogallery">Image Gallery</Link>
          </li>
          <li className={window.location.pathname === "/wedding/taskmanager" ? "active" : ""}>
            <Link to="/wedding/taskmanager">Task Manager</Link>
          </li>
        </ul>
      </Nav>
      <div className="container">
        <h1 className="image-gallery-header"> Image Gallery </h1>
        <ImageGallery> {
          this.state.photoGallery.map(image =>
            <Image
              key= {image.imgurl}
              url= {image.url}
              imgurl= {image.imgurl}
              description= {image.description}
            />
          )
        }
      < /ImageGallery>
      <AddImageButton
        handleInputChange = {this.handleInputChange}
        imgurl = {this.state.imgurl}
        url={this.state.url}
        imgDescription = {this.state.imgDescription}
        addImage = {this.addImage}
      />
    </div>
    </div>
    )
  }
}

export default PhotoGalleryPage;
