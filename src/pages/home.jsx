import React from "react";
import "./home.css";
import bridge from "../assets/bridge.png";
import house from "../assets/asianhouse.png";
import suitcase from "../assets/suitcase.jpg";
import cam from "../assets/cam.jpg";
import map from "../assets/map.jpg";
import hat from "../assets/hat.jpg";

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
      <div className="mid-section">
        <div className="img-display">
          <img className="icon" src={suitcase} />
          <img className="icon" src={hat} />
          <img className="icon" src={map} />
        </div>
        <div className="features">
          <div className="feature-container">
            <p className="desc-dark">Pack Your Memories</p>
            <p>
              Pack light but carry a wealth of memories with our travel
              journaling app. Organize your trips, compile packing lists, and
              keep track of your travel essentials.
            </p>
          </div>
          <div className="feature-container">
          <p className="desc-dark">Capture Every Moment</p>
          <p>
            With our travel journaling app, your camera becomes your best travel
            companion. Document your adventures effortlessly and cherish your
            memories forever.
          </p>
          </div>
          <div className="feature-container">
          <p className="desc-dark">Explore with Ease</p>
          <p>
            Navigate the world like a seasoned explorer with our travel
            journaling app. Seamlessly plan your itinerary, discover hidden
            gems, and mark your favorite spots on interactive maps.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePg;
