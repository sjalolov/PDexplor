import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const fontStyles = {
  color: "white",
  fontSize: "30px",
  position: "20px",
  marginTop: "5px",
};

export default function Footer() {
  return (
    <body>
      <footer>
        <div class="content">
          <div class="top">
            <div class="logo-details">
              <i class="fab fa-slack"></i>
              <span class="logo_name"> PDexplore</span>
            </div>
            <div class="media-icons">
              <a href="https://www.facebook.com/">
                <FaFacebook style={fontStyles} />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram style={fontStyles} />
              </a>
              <a href="https://www.youtube.com/">
                <FaYoutube style={fontStyles} />
              </a>
              <a href="https://github.com/sjalolov/Makon">
                <FaGithub style={fontStyles} />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedin style={fontStyles} />
              </a>
            </div>
          </div>
          <div class="link-boxes">
            <ul class="box">
              <li class="link_name">About Us</li>
              <li>
                <a href="none">Owner</a>
              </li>
              <li>
                <a href="none">Contact us</a>
              </li>
              <li>
                <a href="none">Partners</a>
              </li>
              <li>
                <a href="none">Get started</a>
              </li>
            </ul>
            <ul class="box">
              <li class="link_name">Services</li>
              <li>
                <a href="none">App design</a>
              </li>
              <li>
                <a href="none">Web design</a>
              </li>
              <li>
                <a href="none">Logo design</a>
              </li>
              <li>
                <a href="none">Banner design</a>
              </li>
            </ul>
            <ul class="box">
              <li class="link_name">Account</li>
              <li>
                <a href="none">Profile</a>
              </li>
              <li>
                <a href="none">My account</a>
              </li>
              <li>
                <a href="none">Prefrences</a>
              </li>
              <li>
                <a href="none">Purchase</a>
              </li>
            </ul>
            <ul class="box input-box">
              <li class="link_name">Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div class="bottom-details">
          <div class="bottom_text">
            <span class="copyright_text">
              Copyright © 2021 <a href="none">PDexplore.</a>All rights
              reserved
            </span>
            <span class="policy_terms">
              <a href="none">Privacy policy</a>
              <a href="none">Terms and condition</a>
            </span>
          </div>
        </div>
      </footer>
    </body>
  );
}