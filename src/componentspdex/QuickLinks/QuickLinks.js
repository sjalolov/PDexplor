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

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const logoStyles = {
  color: "rgba(135, 254, 255,)",
  fontSize: "20px",
  marginLeft: "100px",
  position: "30px",
  marginTop: "18px",
};

const fontStyles = {
  color: "black",
  fontSize: "35px",
  position: "20px",
  marginTop: "5px",
};

export default function QuickLinks() {
  return (
    <body>
      <div className="grid">
        <a
          className="item1"
          href="https://www.tripadvisor.com/Hotels-g293963-Tajikistan-Hotels.htmll"
        >
          <span className="link_text"> Hotels</span>
          <FaHotel style={logoStyles} />
        </a>
        <a
          className="item2"
          href="https://www.tripadvisor.com/Attractions-g293963-Activities-Tajikistan.htmll"
        >
          <span className="link_text">Things to do</span>
          <FaServer style={logoStyles} />
        </a>
        <a
          className="item3"
          href="https://www.tripadvisor.com/Restaurants-g293963-Tajikistan.html"
        >
          <ul className="link_text">Restaurants</ul>
          <FaYelp style={logoStyles} />
        </a>
        <a
          className="item4"
          href="https://consular.tj/travel-documents-republic-tajikistan.aspx"
        >
          <ul className="link_text">Documents</ul>
          <FaStackOverflow style={logoStyles} />
        </a>
        <a
          className="item5"
          href="https://www.tripadvisor.com/Attraction_Products-g293963-t11902-zfg12022-Tajikistan.html"
        >
          <ul className="link_text">Hiking</ul>
          <FaHiking style={logoStyles} />
        </a>
        <a
          className="item6"
          href="https://www.tripadvisor.com/Attractions-g293963-Activities-Tajikistan.html"
        >
          <ul className="link_text">Places</ul>
          <FaSafari style={logoStyles} />
        </a>
      </div>
      <div class="wrapper_img">
        <div>
          <img
            className="search_bg"
            alt="blue"
            src="https://i.postimg.cc/289qsCzd/bgimage.png"
          ></img>
          <div className="search">
            <input type="text" placeholder="Search.." />
          </div>
        </div>
      </div>
      <ul class="wrapper">
        <li class="icon facebook">
          <span class="tooltip">Facebook</span>
          <span>
            <a class="fab fa-facebook-f" href="https://www.facebook.com">
              <FaFacebook style={fontStyles} />
            </a>
          </span>
        </li>
        <li class="icon twitter">
          <span class="tooltip">Linkedin</span>
          <span>
            <a href="https://www.linkedin.com">
              <FaLinkedin style={fontStyles} />
            </a>
          </span>
        </li>
        <li class="icon instagram">
          <span class="tooltip">Instagram</span>
          <span>
            <a class="fab fa-instagram" href="https://www.instagram.com">
              <FaInstagram style={fontStyles} />
            </a>
          </span>
        </li>
        <li class="icon github">
          <span class="tooltip">Github</span>
          <span>
            <a class="fab fa-github" href="https://www.github.com">
              <FaGithub style={fontStyles} />
            </a>
          </span>
        </li>
        <li class="icon youtube">
          <span class="tooltip">Youtube</span>
          <span>
            <a
              class="fab fa-youtube"
              href="https://www.youtube.com/watch?v=sFM5wQfQ_SU"
            >
              <FaYoutube style={fontStyles} />
            </a>
          </span>
        </li>
      </ul>
    </body>
  );
}
