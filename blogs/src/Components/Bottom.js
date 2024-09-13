import React from "react";
import "./Bottom.css";

function Bottom() {
  return (
    <div className="bottom">
      <div className="bottom-title">
        <h5>Drop Me a Line, Let Me Know What You Think</h5>
      </div>
      <div>
        <div>
          <div className="fields">
            <div>
              <label>First Name</label>
            </div>
            <input type="text"></input>
          </div>
          <div className="fields">
            <div>
              <label>Last Name</label>
            </div>
            <input className="input" type="text"></input>
          </div>
        </div>
        <div className="fields">
          <div>
            <label>Email *</label>
          </div>
          <input className="input" type="text"></input>
        </div>
        <div className="fields">
          <div>
            <label>Message...</label>
          </div>
          <textarea type="text"></textarea>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
