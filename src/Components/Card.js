import React from "react";
import "../Style/Card.css";

function Card({ image, title }) {
  return (
    <div className="col-lg-4 col-12 col-sm-6">
      <div class="card rounded-0 border-0">
        <div class="card-body">
          <h5 class="card-title">{title}</h5>

          <div className="card-image">
            <img className="w-100" src={image} alt="" />
          </div>

          <p class="card-text text-body-secondary">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
