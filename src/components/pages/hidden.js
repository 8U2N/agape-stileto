import React, { Component } from "react";
import axios from "axios";
import GalleryItem from "../gallery/gallery-item";
import GalleryEditForm from "../forms/gallery-edit-form";
import GalleryAddForm from "../forms/gallery-add-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faDumpsterFire,
} from "@fortawesome/free-solid-svg-icons";

export default class Hidden extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Gallery",
      painting: [],
      paintingToEdit: {},
    };

    this.getGalleryItems = this.getGalleryItems.bind(this);
    this.mapGalleryItems = this.mapGalleryItems.bind(this);
    this.clearPaintingEdit = this.clearPaintingEdit.bind(this);
    this.editClick = this.editClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleAddSubmit(painting) {
    this.setState({
      painting: [painting].concat(this.state.painting),
    });
  }

  handleEditSubmit() {
    this.getGalleryItems();
  }

  clearPaintingEdit() {
    this.setState({
      paintingToEdit: {},
    });
  }

  editClick(painting) {
    this.setState({
      paintingToEdit: painting,
    });
  }

  deleteClick(event, item) {
    fetch(`http://127.0.0.1:5000/painting/delete/${item.id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Delete Sucessful!");
        } else {
          console.log("Delete Failed...");
        }
        return response;
      })
      .then((response) => {
        this.setState({
          painting: this.state.painting.filter((item) => {
            return item.id !== item.id;
          }),
        });
        return response, this.state.painting;
      })
      .catch((error) => {
        console.log("handleDeleteClick error", error);
      });
    event.preventDefault();
  }

  getGalleryItems() {
    axios
      .get("http://127.0.0.1:5000/paintings/get")
      .then((response) => {
        console.log(response);
        this.setState({
          painting: [...response.data],
        });
      })
      .catch((error) => {
        console.log("Error retreiving gallery items", error);
      });
  }

  mapGalleryItems() {
    return this.state.painting.map((item) => {
      return (
        <div key={item.name} className="edit-gallery-item-wrapper">
          <div className="available-paintings-wrapper">
            <GalleryItem
              key={item.id}
              id={item.id}
              name={item.name}
              painting={item}
              price={item.price}
            />
          </div>
          <div className="delete-button-wrapper">
            <a
              className="delete"
              id={item.id}
              onClick={(event) => this.deleteClick(event, item)}
            >
              <FontAwesomeIcon icon={faDumpsterFire} id={item.id} />
            </a>
          </div>
        </div>
      );
    });
  }

  componentDidMount() {
    this.getGalleryItems();
  }

  render() {
    return (
      <div className="gallery-edit-form-wrapper">
        <div className="forms">
          <div className="edit-form">
            <GalleryEditForm
              handleChange={this.handleChange}
              handleEditSubmit={this.handleEditSubmit}
              editClick={this.editClick}
            />
          </div>
          <div className="add-form">
            <GalleryAddForm
              handleChange={this.handleChange}
              handleAddSubmit={this.handleAddSubmit}
            />
          </div>
        </div>
        <div className="gallery-wrapper">
          <div className="gallery-display-wrapper">
            {this.mapGalleryItems()}
          </div>
        </div>
      </div>
    );
  }
}
