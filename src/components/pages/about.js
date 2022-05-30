import React from "react";
import artistPhoto1 from "../../../static/assets/images/photos/lydia1.jpg";
import artistPhoto2 from "../../../static/assets/images/photos/lydia2.jpg";
import artistPhoto3 from "../../../static/assets/images/photos/lydia3.jpg";
import artistPhoto4 from "../../../static/assets/images/photos/lydia4.jpg";
import artistPhoto5 from "../../../static/assets/images/photos/lydia5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuoteLeftAlt,
  faQuoteRightAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <div className="container">
      <div className="banner">
        <div className="banner-subheading">
          <h1>Art Excursions by Lydia</h1>
        </div>
      </div>
      <div className="page-container about">
        <div className="hero-container about">
          <div className="left-column">
            <h2>Lydia Rochelle</h2>
            <br />
            <p>
              As a native of Las Vegas, Lydia's art journey began with
              music--specifically, the violin. After a 24 year pursuit, Lydia's
              musical journey blossomed into several defining moments. She was
              recruited to the Las Vegas Youth Philharmonic Orchestra at the age
              of 16, performed an invitational international European tour in
              2008, and was awarded a music scholarship for excellence in
              performance from the University of Nevada, Las Vegas.
            </p>
            <br />
            <h4>From Music To Paint</h4>
            <br />
            <p>
              Like music, paint is an artform with limitless potential. Art
              itself is, in it's purest, most condensed form, a means of
              communication. Communication fosters connection. In this way,
              Lydia's paintings are her voice shared with the
              world--effectively, a means of enabling her daughter's voice to be
              heard by the world.
            </p>
            <br />
            <div className="image-footer-wrapper">
              <img src={artistPhoto2}></img>
              <img src={artistPhoto3}></img>
              <img src={artistPhoto4}></img>
              <img src={artistPhoto5}></img>
            </div>
          </div>
          <div className="right-column">
            <div className="image-sidebar-wrapper">
              <img src={artistPhoto1}></img>
              <div className="text-sidebar-wrapper">
                <h3>
                  <span>
                    <FontAwesomeIcon icon={faQuoteLeftAlt} />
                  </span>
                  <br />
                  My daughter was diagnosed with autism at 6 months old. I
                  always worried she wouldn't be able to connect with me. When I
                  discovered she enjoyed painting, it opened up a whole new
                  world for the both of us.
                  <span>
                    <FontAwesomeIcon icon={faQuoteRightAlt} />
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
