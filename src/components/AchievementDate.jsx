import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";

const AchievementDate = () => {
  return (
    <div className="achievement col-4 me-3">
      <p style={{ fontSize: "12px", margin: "0" }}>Date</p>
      <div className="d-flex col pt-2">
        <div className="select col">
          <p className="selected-name" style={{ margin: 0, fontSize: "19px" }}>
            February 2019
          </p>
          <p
            className="selected-position"
            style={{ fontSize: "12px", margin: "0" }}
          >
            Achievement Date
          </p>
        </div>
        <div className="select-arrow">
          <button className="btn pb-1 shadow">
            <FontAwesomeIcon icon={solid("calendar")} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AchievementDate;
