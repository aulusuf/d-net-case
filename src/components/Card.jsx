import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React from "react";
// import timelineImage from "../assets/timeline.png";

const Card = (props) => {
  return (
    <div className="box ">
      <div className="box-header">
        <div className="box-properties d-flex justify-content-end ">
          <button className="btn" onClick={props.clicked}>
            <FontAwesomeIcon icon={solid("ellipsis-vertical")} />
          </button>
        </div>
      </div>
      {props.children}
      {/* <div className="box-content">
        <div className="kpi-icon">
          <img src={props.kpiIcon} alt="timeline" className="card-image" />
        </div>

        <div className="percentage-progress">
            {props.id}
            <p className="value">50%</p>
            <div className="progress rounded-pill">
              <div
                className="progress-bar rounded-pill"
                role="progressbar"
                // style={{ width: `${props.indicator}` }}
                style={{ width: `50%` }}
                aria-valuenow={props.indicator}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        </div>
        <div className="kpi">
          <div className="kpi-badge">
            <FontAwesomeIcon icon={solid("bookmark")} />
          </div>
          <div
            className="pb-3 d-flex align-items-start flex-column"
            style={{ height: "100px" }}
          >
            <p className="name ps-3 mb-auto">{props.kpiName}</p>

            <p
              className="ps-3 "
              style={{
                fontWeight: "300",
                fontSize: "12px",
                marginBottom: "0",
              }}
            >
              Bobot KPI : {props.kpiWeight}%
            </p>
          </div>
        </div>
      </div> */}
      <div className="box-footer">
        <div className="kpi-detail">
          <p className="percentage">{props.kpiWeight}%</p>
          <p className="title">{props.kpiName}</p>
          <p className="description">{props.kpiDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
