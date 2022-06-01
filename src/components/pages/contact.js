import React, { Component } from "react";
import contactPhoto from "../../../static/assets/images/photos/contact-lydia.jpg";
import OrderForm from "../forms/order-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      address: "",
      city: "",
      zip_code: "",
      selected_painting: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.orderFormSubmit = this.orderFormSubmit.bind(this);
    this.orderClick = this.orderClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  orderClick() {
    this.orderFormSubmit();
  }

  orderFormSubmit(event) {
    fetch("https://agape-stileto-back-2.herokuapp.com/order/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        address: this.state.address,
        city: this.state.city,
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
          zip_code: "",
          selected_painting: "",
        });
      })
      .catch((error) => console.log("Error submitting order...", error));
    event.preventDefault();
  }

  render() {
    return (
      <div className="contact-page-wrapper">
        <div className="hero-container">
          <div className="contact-page-heading">
            <h1>Contact</h1>
            <img src={contactPhoto}></img>
          </div>
          <div className="button-board-wrapper">
            <div className="button-board">
              <a href="https://www.facebook.com/TylerandLydia" target="_blank">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a href="https://twitter.com/Lydia_Burnworth" target="_blank">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
              <a
                href="https://www.instagram.com/lydiaburnworth/?hl=en"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagramSquare} />
              </a>
              <a href="mailto: lydia.burnworth@gmail.com" target="_blank">
                <FontAwesomeIcon icon={faSquareEnvelope} />
              </a>
            </div>
          </div>
          <div className="contact-form-container">
            <OrderForm
              handleChange={this.handleChange}
              orderFormSubmit={this.orderFormSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}
