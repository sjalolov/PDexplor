import React from "react";
import "./QuickLinks.css";
import {
  FaHotel,
  FaServer,
  FaSafari,
  FaYelp,
  FaStackOverflow,
  FaHiking,
} from "react-icons/fa";

const logoStyles = {
  color: "rgba(135, 254, 255,)",
  fontSize: "20px",
  marginLeft: "100px",
  position: "30px",
  marginTop: "18px",
};



export default function QuickLinks() {
  return (
    <body>
      <div className="grid">
        <a
          className="item1"
          href="https://www.tripadvisor.com/Hotels-g293963-Tajikistan-Hotels.html"
        >
          <span className="link_text"> Hotels</span>
          <FaHotel style={logoStyles} />
        </a>
        <div className="item2">
          <span className="link_text">Things to do</span>
          <FaServer style={logoStyles} />
        </div>
        <div className="item3">
          <ul className="link_text">Restaurants</ul>
          <FaYelp style={logoStyles} />
        </div>
        <div className="item4">
          <ul className="link_text">Documents</ul>
          <FaStackOverflow style={logoStyles} />
        </div>
        <div className="item5">
          <ul className="link_text">Hiking</ul>
          <FaHiking style={logoStyles} />
        </div>
        <div className="item6">
          <ul className="link_text">Places</ul>
          <FaSafari style={logoStyles} />
        </div>
      </div>

        <div className="search">
          <input type="text" placeholder="Search.." />
        </div>
      <ul class="wrapper">
        <li class="icon facebook">
          <span class="tooltip">Facebook</span>
          <FaHotel style={logoStyles} />
          <span>
            <i class="fab fa-facebook-f"></i>
            <FaHotel style={logoStyles} />
          </span>
        </li>
        <li class="icon twitter">
          <span class="tooltip">Twitter</span>
          <span>
            <i
              class="fab fa-twitter"
              href="https://www.tripadvisor.com/Hotels-g293963-Tajikistan-Hotels.html"
            ></i>
          </span>
        </li>
        <li class="icon instagram">
          <span class="tooltip">Instagram</span>
          <span>
            <i class="fab fa-instagram"></i>
          </span>
        </li>
        <li class="icon github">
          <span class="tooltip">Github</span>
          <span>
            <i class="fab fa-github"></i>
          </span>
        </li>
        <li class="icon youtube">
          <span class="tooltip">Youtube</span>
          <span>
            <i class="fab fa-youtube"></i>
          </span>
        </li>
      </ul>
    </body>
  );
}
