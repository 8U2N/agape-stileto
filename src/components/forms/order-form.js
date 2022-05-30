import React, { Component } from "react";

export default class OrderForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: "Order Form",
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      city: "",
      state: "",
      zip_code: "",
      selected_painting: "",
      submitStatus: "Place Order",
    };

    this.handleChange = this.handleChange.bind(this);
    this.orderFormSubmit = this.orderFormSubmit.bind(this);
    this.orderClick = this.orderClick.bind(this);
  }

  orderClick() {
    this.orderFormSubmit();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  orderFormSubmit() {
    fetch("http://127.0.0.1:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        address: this.state.address,
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zip_code: this.state.zip_code,
        selected_painting: this.state.selected_painting,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Order Submitted Successfully!", data);
        this.setState({
          first_name: "",
          last_name: "",
          email: "",
          address: "",
          city: "",
          state: "",
          zip_code: "",
          selected_painting: "",
          submitStatus: "Order Submitted!",
        });
        return this.state.submitStatus;
      })
      .catch((error) => console.log("Error submitting order...", error));
  }

  render() {
    return (
      <div className="contact-form-wrapper">
        <div className="contact-form-heading">Painting Order Form</div>
        <form onSubmit={this.orderFormSubmit} className="contact-form">
          <input
            onChange={this.handleChange}
            type="text"
            name="first_name"
            placeholder="First Name"
            value={this.state.first_name}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="last_name"
            placeholder="Last Name"
            value={this.state.last_name}
          />
          <input
            onChange={this.handleChange}
            type="email"
            name="email"
            placeholder="Email Address"
            value={this.state.email}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="address"
            placeholder="Street Address"
            value={this.state.address}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="city"
            placeholder="City"
            value={this.state.city}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="state"
            placeholder="State"
            value={this.state.state}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="zip_code"
            placeholder="Zip Code"
            value={this.state.zip_code}
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="selected_painting"
            placeholder="Painting You Want To Order"
            value={this.state.selected_painting}
          />
        </form>
        <button onClick={this.orderClick} className="contact-button">
          {this.state.submitStatus}
        </button>
      </div>
    );
  }
}
