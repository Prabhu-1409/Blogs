import React from "react";
import "./Followme.css";

function Followupimage({ image }) {
  return (
    <div className="follow-image-container">
      <div className="image-container">
        <img className="follow-image" src={image}></img>
      </div>
      <div className="followup-content">
        <div className="followup-name">
          <h6>Name</h6>
        </div>
        <span className="followup-line"></span>
        <div className="followup-tags">
          <h6>Tags</h6>
        </div>
      </div>
    </div>
  );
}

export default Followupimage;
