import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class GalleryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paintingItemClass: "",
    };
  }

  render() {
    const { id, image_url, price, name, color, medium, description } =
      this.props.painting;
    return (
      <div id={name}>
        <div className="gallery-item-display-wrapper">
          <div className="gallery-item-wrapper">
            <div className="item-name-wrapper">{name}</div>
            <Link to={`/gallery/${id}`}>
              <div className={name}>
                <img src={image_url} alt="painting" />
              </div>
              ${price}
            </Link>
            <div className="gallery-item-text-wrapper">{description}</div>
            <div className="gallery-item-button-wrapper">
              <Link to={`/gallery/${id}`} className="link-btn">
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
