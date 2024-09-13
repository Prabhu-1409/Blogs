import React, { useState } from "react";
import "./Followme.css";
import grid1 from "./grid/grid1.jpg";
import grid2 from "./grid/grid2.jpg";
import grid3 from "./grid/grid3.jpg";
import grid4 from "./grid/grid4.jpg";
import grid5 from "./grid/grid5.jpg";
import grid6 from "./grid/grid6.jpg";
import grid7 from "./grid/grid7.jpg";
import grid8 from "./grid/grid8.jpg";
import { IoMdClose } from "react-icons/io";
import Followupimage from "./Followupimage";

function Followme() {
  const [containerimage, setcontainerimage] = useState();
  const [containervisibility, setcontainervisibility] = useState(false);
  function container(image) {
    setcontainervisibility(true);
    setcontainerimage(image);
  }
  return (
    <div className="follow-me">
      <p>FOLLOW ME</p>
      <div className="grid-container">
        <div className="grid">
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              container(grid1);
            }}
          >
            <img className="grid-image" src={grid1}></img>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              container(grid2);
            }}
          >
            <img className="grid-image" src={grid2}></img>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              container(grid3);
            }}
          >
            <img className="grid-image" src={grid3}></img>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              container(grid4);
            }}
          >
            <img className="grid-image" src={grid4}></img>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              container(grid5);
            }}
          >
            <img className="grid-image" src={grid5}></img>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              container(grid6);
            }}
          >
            <img className="grid-image" src={grid6}></img>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              container(grid7);
            }}
          >
            <img className="grid-image" src={grid7}></img>
          </a>
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              container(grid8);
            }}
          >
            <img className="grid-image" src={grid8}></img>
          </a>
        </div>
      </div>
      <div>
        {containervisibility ? (
          <div className="floating-container">
            <div className="close-container">
              <IoMdClose
                size={40}
                className="close"
                onClick={() => {
                  setcontainervisibility(false);
                  setcontainerimage("");
                }}
              />
            </div>
            <Followupimage image={containerimage}></Followupimage>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Followme;
