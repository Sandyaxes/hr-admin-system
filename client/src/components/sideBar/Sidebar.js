import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import "./sidebar.css";

function Sidebar() {
  const history = useHistory();

  const logout = async (event) => {
    event.preventDefault();
    await fetch("/logout", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then(history.push("/Login"));
  };

  return (
    <div className="wrapper">
      <div className="sidebar">
        <ul>
          <li>
            <Link to="#" className="active">
              <FaIcons.FaHome className="icon" />
              <label className="item">MENU</label>
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaIcons.FaUserFriends className="icon" />
              <label className="item">Employees</label>
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaIcons.FaDatabase className="icon" />
              <label className="item">Departments</label>
            </Link>
          </li>
          <li>
            <Link to="">
              <FaIcons.FaUserShield className="icon" />
              <label className="item" onClick={logout}>
                Logout
              </label>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
