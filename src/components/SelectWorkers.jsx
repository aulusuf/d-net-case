import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { useState } from "react";
import { workers } from "../db";
import { useDispatch, useSelector } from "react-redux";
import { workerActions } from "../store/worker-slice";

// <p className="selected-name" style={{ margin: "0", fontSize: "19px" }}>
//   Katerina Furai
// </p>
// <p
//   className="selected-position"
//   style={{ fontSize: "12px", margin: "0" }}
// >
//   Developer
// </p>
const DropdownMenu = () => {
  const dispatch = useDispatch();
  const DropdownItem = (props) => {
    return (
      <div className="dropdown-item-wrapper">
        <div className="dropdown-item-list" onClick={props.worker}>
          {props.children}
        </div>
      </div>
    );
  };
  const handleClick = (id) => {
    dispatch(workerActions.toggleWorker(false));
    dispatch(workerActions.setWorker(id));
    // console.log(id);
  };
  return (
    <div className="dropdown shadow">
      {workers &&
        workers.map((person) => {
          return (
            <div key={person.id}>
              <DropdownItem worker={() => handleClick(person)}>
                <p
                  className="selected-name"
                  style={{ margin: "0", fontSize: "19px" }}
                >
                  {person.name}
                </p>
                <p
                  className="selected-position"
                  style={{ fontSize: "12px", margin: "0" }}
                >
                  {person.position}
                </p>
              </DropdownItem>
            </div>
          );
        })}
    </div>
  );
};

const SelectWorkers = () => {
  const dispatch = useDispatch();
  const worker = useSelector((state) => state.worker.selectedWorker);
  const open = useSelector((state) => state.worker.opened);
  console.log(worker);
  return (
    <>
      <div className="workers col-4 me-3">
        <p style={{ fontSize: "12px", margin: "0" }}>Name</p>
        <div className="d-flex col pt-2">
          <div className="select col">
            <p
              className="selected-name"
              style={{ margin: "0", fontSize: "19px" }}
            >
              {worker.name ? worker.name : "Select worker"}
            </p>
            <p
              className="selected-position"
              style={{ fontSize: "12px", margin: "0" }}
            >
              {worker.position}
            </p>
          </div>
          <div className="select-arrow">
            <button
              className="btn shadow pb-1"
              onClick={() => dispatch(workerActions.toggleWorker(!open))}
            >
              <FontAwesomeIcon icon={solid("chevron-down")} />
            </button>
          </div>
        </div>
        {open && <DropdownMenu />}
      </div>
    </>
  );
};

export default SelectWorkers;
