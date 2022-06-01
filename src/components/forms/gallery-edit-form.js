import React, { Component } from "react";

export default class GalleryEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      image_url: "",
      price: "",
      name: "",
      color: "",
      medium: "",
      description: "",
      editStatus: "Submit Edit",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleEditSubmit(event) {
    fetch(
      `https://agape-stileto-back-2.herokuapp.com/painting/update/${this.props.id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          id: this.state.id,
          image_url: this.state.image_url,
          price: this.state.price,
          name: this.state.name,
          color: this.state.color,
          medium: this.state.medium,
          description: this.state.description,
        }),
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log("Update Successful!");
        } else {
          console.log("Update Failed...");
        }
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Edit Submitted Successfully!", data);
        this.setState({
          id: "",
          image_url: "",
          price: "",
          name: "",
          color: "",
          medium: "",
          description: "",
          editStatus: "Edit Sumbitted!",
        });
        return mapGalleryItems();
      })
      .catch((error) => console.log("Error Editing Painting Info...", error));
    event.preventDefault();
  }

  render() {
    return (
      <div className="forms">
        <form onSubmit={this.handleEditSubmit} className="gallery-form-wrapper">
          <div className="gallery-form">
            <h1>Gallery Edit Form</h1>
            <div className="gallery-manager-image-wrapper">
              <img
                src={this.state.image_url}
                style={{
                  width: "150px",
                }}
              />
            </div>
            <input
              type="text"
              name="id"
              placeholder="Painting ID"
              value={this.state.id}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="image_url"
              placeholder="image url"
              value={this.state.image_url}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={this.state.price}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="color"
              placeholder="Color"
              value={this.state.color}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="medium"
              placeholder="Medium"
              value={this.state.medium}
              onChange={this.handleChange}
            />

            <textarea
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button type="submit" className="button">
              {this.state.editStatus}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
