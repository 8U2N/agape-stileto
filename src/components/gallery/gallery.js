import React, { Component } from "react";
import axios from "axios";
import GalleryItem from "../gallery/gallery-item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faPalette } from "@fortawesome/free-solid-svg-icons";

export default class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Gallery",
      painting: [],
    };

    this.getGalleryItems = this.getGalleryItems.bind(this);
    this.mapGalleryItems = this.mapGalleryItems.bind(this);
    this.colorFilter = this.colorFilter.bind(this);
  }

  colorFilter(filter) {
    if (filter === "All") {
      this.getGalleryItems();
    } else {
      this.getGalleryItems(filter);
    }
  }

  getGalleryItems(filter = null) {
    axios
      .get("http://127.0.0.1:5000/paintings/get")
      .then((response) => {
        console.log(response);
        if (filter) {
          this.setState({
            painting: response.data.filter((item) => {
              return item.color === filter;
            }),
          });
        } else {
          this.setState({
            painting: response.data,
          });
        }
      })
      .catch((error) => {
        console.log("Error retreiving gallery items", error);
      });
  }

  mapGalleryItems() {
    return this.state.painting.map((item) => {
      return (
        <GalleryItem
          key={item.id}
          name={item.name}
          painting={item}
          price={item.price}
        />
      );
    });
  }

  componentDidMount() {
    this.getGalleryItems();
  }

  render() {
    return (
      <div className="gallery-wrapper">
        <div className="filter-wrapper">
          <div className="filter-button-wrapper">
            <button
              onClick={() => this.colorFilter("Blue")}
              name="blue"
              style={{
                color: "blue",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "4em",
              }}
            >
              <FontAwesomeIcon icon={faDroplet} />
            </button>
            <button
              name="orange"
              onClick={() => this.colorFilter("Orange")}
              style={{
                color: "orange",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "4em",
              }}
            >
              <FontAwesomeIcon icon={faDroplet} />
            </button>
            <button
              name="black"
              onClick={() => this.colorFilter("Black")}
              style={{
                color: "black",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "4em",
              }}
            >
              <FontAwesomeIcon icon={faDroplet} />
            </button>
            <button
              onClick={() => this.colorFilter("White")}
              name="white"
              style={{
                color: "ghostwhite",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "4em",
              }}
            >
              <FontAwesomeIcon icon={faDroplet} />
            </button>
            <button
              onClick={() => this.colorFilter("Red")}
              name="red"
              style={{
                color: "red",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "4em",
              }}
            >
              <FontAwesomeIcon icon={faDroplet} />
            </button>
            <button
              onClick={() => this.colorFilter("Yellow")}
              name="yellow"
              style={{
                color: "#FCF55F",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "4em",
              }}
            >
              <FontAwesomeIcon icon={faDroplet} />
            </button>
            <button
              onClick={() => this.colorFilter("Green")}
              name="green"
              style={{
                color: "#50C878",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "4em",
              }}
            >
              <FontAwesomeIcon icon={faDroplet} />
            </button>
            <button
              onClick={() => this.colorFilter("All")}
              className="all"
              style={{
                color: "ghostwhite",
                backgroundColor: "transparent",
                border: "none",
                fontSize: "4em",
              }}
            >
              <FontAwesomeIcon icon={faPalette} />
            </button>
          </div>
        </div>
        <div className="gallery-display-wrapper">{this.mapGalleryItems()}</div>
      </div>
    );
  }
}
