import React, { Component } from "react";
import axios from "axios";

export default class GalleryInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Painting Details",
      painting: {},
    };

    this.getGalleryItem = this.getGalleryItem.bind(this);
  }

  componentWillMount() {
    this.getGalleryItem();
  }

  getGalleryItem() {
    axios
      .get(
        `https://agape-stileto-back-2.herokuapp.com/painting/get/${this.props.painting.id}`
      )
      .then((response) => {
        console.log("getGalleryItem response:", response);
        this.setState({
          painting: response.data.painting,
        });
      })
      .catch((error) => {
        console.log("Error retreiving gallery items", error);
      });
  }

  componentDidMount() {
    this.getGalleryItem();
  }

  render() {
    const { image_url, price, name, color, medium, description } =
      this.state.painting;

    return (
      <div className="gallery-detail-wrapper">
        <div className="gallery-detail-heading">
          {this.props.value.match.params.url}
        </div>
        <div className="featured-painting-wrapper">{this.mapGalleryItem()}</div>
      </div>
    );
  }
}
