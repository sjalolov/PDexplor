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
        <div className="item1">
          <ul className="link_text" href= "https://www.tripadvisor.com/Hotels-g293963-Tajikistan-Hotels.html">Hotels</ul>
          <FaHotel style={logoStyles} />
        </div>
        <div className="item2">
          <ul className="link_text">Things to do</ul>
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
    </body>
  );
}
