import React, { Component } from "react";
import Nav from "../../components/Nav";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import moment from "moment";


class Welcome extends Component {
  state = {
    weddingName: "",
    weddingId: "",
    bride: "",
    partner: "",
    venue: "",
    weddingDate: ""
  }


  componentDidMount() {
    this.setState({weddingName: this.props.weddingName},
      () => this.getWeddingData())
  };

  getWeddingData = () => {
    API.getWedding(this.state.weddingName)
      .then(res => this.setState(
        {
          weddingId: res.data.weddingId,
          bride: res.data.bride,
          partner: res.data.partner,
          venue: res.data.venue,
          weddingDate: moment(res.data.weddingDate).format("YYYY-MM-DD")
        }
      ))
      .catch(err => console.log(err))
  }



  render() {
    return (
    <div>

      <p>{this.state.bride} & {this.state.partner}</p>
      <p>{this.state.weddingDate}</p>
      <p>{this.state.venue}</p>

    </div>
    );
  }
}

export default Welcome;
