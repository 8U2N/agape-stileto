import React, { Component } from "react";
import axios from "axios";
import GalleryItem from "../gallery/gallery-item";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Home",
      painting: [],
    };

    this.getGalleryItems = this.getGalleryItems.bind(this);
  }

  getGalleryItems() {
    axios
      .get("https://agape-stileto-back-2.herokuapp.com/paintings/get")
      .then((response) => {
        console.log(response);
        this.setState({
          painting: response.data.slice(-1),
        });
      })
      .catch((error) => {
        console.log("Error retreiving gallery items", error);
      });
  }

  mapGalleryItems() {
    return this.state.painting.map((item) => {
      return <GalleryItem painting={item} key={item.id} />;
    });
  }

  componentDidMount() {
    this.getGalleryItems();
  }

  render() {
    return (
      <div className="featured-painting-wrapper">{this.mapGalleryItems()}</div>
    );
  }
}
