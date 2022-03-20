import React from "react";
// import { Link } from "react-router-dom";
import AchievementDate from "../components/AchievementDate";
import AchievementProgress from "../components/AchievementProgress";
import Card from "../components/Card";
import SelectWorkers from "../components/SelectWorkers";
import { kpi } from "../db.js";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
/*
      1. Navbar
          => Logo
          => Position
          => Profile
      2. Sidebar
          =>
      3. Information
        => Detail
        => Date
        => Progress
      4. Content
        => timeline
        => data validation
        => document availability
        => performance apps
        => research new technologies
        => training

        => card
            -> property
            -> progress
            -> bobot kpi
            -> precentage kpi
      */

const Dashboard = () => {
  const worker = useSelector((state) => state.worker.selectedWorker);

  // console.log(worker);
  const handleClick = (item) => {
    console.log(item);
  };

  return (
    <div className="container">
      <div className="information d-flex justify-content-between row mt-4">
        <div className="information-wrapper d-flex col-9">
          <SelectWorkers />
          <AchievementDate />
        </div>
        <AchievementProgress />
      </div>

      <div className="kpis d-flex flex-wrap mt-4">
        {kpi &&
          kpi.map((item) => {
            return (
              <div className="" key={item.id}>
                <Card
                  kpiName={item.name}
                  kpiWeight={item.weight}
                  // kpiIcon={item.icon}
                  kpiDescription={item.description}
                  clicked={() => handleClick(item.id)}
                  id={item.id}
                >
                  <div className="box-content">
                    <div className="kpi-icon">
                      <img
                        src={item.icon}
                        alt="timeline"
                        className="card-image"
                      />
                    </div>
                    <div className="kpi-progress">
                      <p style={{ fontSize: "11px", margin: "0" }}>
                        achievement
                      </p>
                      <div className="percentage-progress">
                        <p
                          className="value"
                          style={
                            worker.length === 0
                              ? { color: "gray" }
                              : item.id === 1 && worker.indicator.timeline < 90
                              ? {
                                  color: "red",
                                }
                              : item.id === 2 &&
                                worker.indicator.dataValidation < 90
                              ? {
                                  color: "red",
                                }
                              : item.id === 3 &&
                                worker.indicator.documentationAvailability < 90
                              ? {
                                  color: "red",
                                }
                              : item.id === 4 &&
                                worker.indicator.performanceApps < 90
                              ? {
                                  color: "red",
                                }
                              : item.id === 5 &&
                                worker.indicator.researchNewTechnology < 90
                              ? {
                                  color: "red",
                                }
                              : item.id === 6 && worker.indicator.training < 90
                              ? {
                                  color: "red",
                                }
                              : { width: `0` }
                          }
                        >
                          {worker.length === 0
                            ? 0
                            : item.id === 1
                            ? worker.indicator.timeline
                            : item.id === 2
                            ? worker.indicator.dataValidation
                            : item.id === 3
                            ? worker.indicator.documentationAvailability
                            : item.id === 4
                            ? worker.indicator.performanceApps
                            : item.id === 5
                            ? worker.indicator.researchNewTechnology
                            : item.id === 6
                            ? worker.indicator.training
                            : null}
                          %
                        </p>
                        <div className="progress rounded-pill">
                          <div
                            className="progress-bar rounded-pill"
                            role="progressbar"
                            style={
                              worker.length === 0
                                ? { width: `0` }
                                : item.id === 1 &&
                                  worker.indicator.timeline < 90
                                ? {
                                    width: `${worker.indicator.timeline}%`,
                                    backgroundColor: "red",
                                  }
                                : item.id === 1
                                ? {
                                    width: `${worker.indicator.timeline}%`,
                                  }
                                : item.id === 2 &&
                                  worker.indicator.dataValidation < 90
                                ? {
                                    width: `${worker.indicator.dataValidation}%`,
                                    backgroundColor: "red",
                                  }
                                : item.id === 2
                                ? {
                                    width: `${worker.indicator.dataValidation}%`,
                                  }
                                : item.id === 3 &&
                                  worker.indicator.documentationAvailability <
                                    90
                                ? {
                                    width: `${worker.indicator.documentationAvailability}%`,
                                    backgroundColor: "red",
                                  }
                                : item.id === 3
                                ? {
                                    width: `${worker.indicator.documentationAvailability}%`,
                                  }
                                : item.id === 4 &&
                                  worker.indicator.performanceApps < 90
                                ? {
                                    width: `${worker.indicator.performanceApps}%`,
                                    backgroundColor: "red",
                                  }
                                : item.id === 4
                                ? {
                                    width: `${worker.indicator.performanceApps}%`,
                                  }
                                : item.id === 5 &&
                                  worker.indicator.researchNewTechnology < 90
                                ? {
                                    width: `${worker.indicator.researchNewTechnology}%`,
                                    backgroundColor: "red",
                                  }
                                : item.id === 5
                                ? {
                                    width: `${worker.indicator.researchNewTechnology}%`,
                                  }
                                : item.id === 6 &&
                                  worker.indicator.training < 90
                                ? {
                                    width: `${worker.indicator.training}%`,
                                    backgroundColor: "red",
                                  }
                                : item.id === 6
                                ? { width: `${worker.indicator.training}%` }
                                : { width: `0` }
                            }
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="kpi">
                      <div
                        className="kpi-badge"
                        style={
                          worker.length === 0
                            ? { color: "gray" }
                            : item.id === 1 && worker.indicator.timeline < 90
                            ? {
                                color: "red",
                              }
                            : item.id === 2 &&
                              worker.indicator.dataValidation < 90
                            ? {
                                color: "red",
                              }
                            : item.id === 3 &&
                              worker.indicator.documentationAvailability < 90
                            ? {
                                color: "red",
                              }
                            : item.id === 4 &&
                              worker.indicator.performanceApps < 90
                            ? {
                                color: "red",
                              }
                            : item.id === 5 &&
                              worker.indicator.researchNewTechnology < 90
                            ? {
                                color: "red",
                              }
                            : item.id === 6 && worker.indicator.training < 90
                            ? {
                                color: "red",
                              }
                            : { color: `#273dae` }
                        }
                      >
                        <FontAwesomeIcon icon={solid("bookmark")} />
                      </div>
                      <div
                        className="pb-3 d-flex align-items-start flex-column"
                        style={{ height: "100px" }}
                      >
                        <p className="name ps-3 mb-auto">{item.name}</p>

                        <p
                          className="ps-3 "
                          style={{
                            fontWeight: "300",
                            fontSize: "12px",
                            marginBottom: "0",
                          }}
                        >
                          Bobot KPI : {item.weight}%
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
