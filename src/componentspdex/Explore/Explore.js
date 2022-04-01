import React from "react";
import "./Explore.css";

export default function Explore() {
  return (
    <body>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,700"
        rel="stylesheet"
      />
      <h1>Explore Portland</h1>
      <div class="card-grid">
        <a class="card" href="http://">
          <img
            class="card__background"
            alt="blue"
            src="https://i.postimg.cc/wv2N9Wj5/portland-food-car.jpg"
            width="280px"
            height="410px"
          ></img>
          <div class="card__content">
            <p class="card__category">Foodcart</p>
            <h3 class="card__heading">Best Portland Foods</h3>
          </div>
        </a>
        <a class="card" href="none">
          <img
            class="card__background"
            alt="blue"
            src="https://i.postimg.cc/02Tz1gCR/c9e12211d9122bf38f5d92eb9e7aefcd-downtown-portland-portland-oregon.jpg"
            width="280px"
            height="410px"
          ></img>
          <div class="card__content">
            <p class="card__category">Shopping</p>
            <h3 class="card__heading">Important Stores in Portland</h3>
          </div>
        </a>
        <a class="card" href="noen">
          <img
            class="card__background"
            alt="blue"
            src="https://i.postimg.cc/zD9h8RJc/84965efc26a6b9cc9fb73c80bdc7cc8e-doughnut-shop-voodoo-donuts.jpg"
            width="280px"
            height="410px"
          ></img>
          <div class="card__content">
            <p class="card__category">History and Art</p>
            <h3 class="card__heading">History and Art in Portland</h3>
          </div>
        </a>
        <a class="card" href="none">
          <img
            class="card__background"
            alt="blue"
            src="https://i.postimg.cc/8c5gYCYd/Portland-View-Poin.jpg"
            width="280px"
            height="410px"
          ></img>
          <div class="card__content">
            <p class="card__category">Hang out in Portland</p>
            <h3 class="card__heading">Place for Friendships</h3>
          </div>
        </a>
      </div>
    </body>
  );
}
