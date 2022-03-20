import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavItem = () => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <Link to="#" onClick={() => setOpen(!open)}>
        <p className="selected-name" style={{ margin: "0", fontSize: "19px" }}>
          Katerina Furai
        </p>
        <p
          className="selected-position"
          style={{ fontSize: "12px", margin: "0" }}
        >
          Developer
        </p>
      </Link>
    </li>
  );
};

export default NavItem;
