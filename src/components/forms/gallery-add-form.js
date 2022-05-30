import React, { Component } from "react";

export default class GalleryAddForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image_url: "",
      price: "",
      name: "",
      color: "",
      medium: "",
      description: "",
      addStatus: "Add Painting",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleAddSubmit(event) {
    fetch("http://127.0.0.1:5000/painting/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        image_url: this.state.image_url,
        price: this.state.price,
        name: this.state.name,
        color: this.state.color,
        medium: this.state.medium,
        description: this.state.description,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Painting Added Successfully!", data);
        this.setState({
          image_url: "",
          price: "",
          name: "",
          color: "",
          medium: "",
          description: "",
          addStatus: "Painting Added!",
        });
        return this.mapGalleryItems();
      })
      .catch((error) => console.log("Error adding painting...", error));
    event.preventDefault();
  }

  render() {
    return (
      <div className="forms">
        <form onSubmit={this.handleAddSubmit} className="gallery-form-wrapper">
          <div className="gallery-form">
            <h1>Gallery Add Form</h1>
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
              {this.state.addStatus}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
