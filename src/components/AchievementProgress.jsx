import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
import trainingImg from "../assets/training.png";

const AchievementProgress = () => {
  return (
    <div className="workers col me-3">
      <div className="d-flex">
        <div className="col-9">
          <p style={{ fontSize: "12px", margin: "0" }}>Achievement on 2019</p>
          <p
            className="value"
            style={{ fontSize: "24px", fontWeight: "bold", margin: "0" }}
          >
            68,22%
          </p>
        </div>
        <div className="col-3">
          <img
            src={trainingImg}
            alt=""
            style={{ height: "60px", width: "auto" }}
          />
        </div>
      </div>
      <div className="progress rounded-pill">
        <div
          className="progress-bar rounded-pill"
          role="progressbar"
          style={{ width: "79%", backgroundColor: "red" }}
          aria-valuenow="79"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default AchievementProgress;
