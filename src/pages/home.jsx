import React from "react";
import "./home.css";
import bridge from "../assets/bridge.png";
import house from "../assets/asianhouse.png";

const HomePg = () => {
  return (
    <div className="HomePg">
      <div className="title-container">
        <h1 className="title">WanderLog</h1>
        <p className="desc">
          Embark on your journey of exploration and discovery with WanderLog,
          the perfect travel documenting and journaling app. Capture every
          moment, from breathtaking vistas to hidden gems, and chronicle your
          adventures with ease.
        </p>
        <button>Let's Start</button>
      </div>
      <img className="bridge" src={house} />
    </div>
  );
};

export default HomePg;
