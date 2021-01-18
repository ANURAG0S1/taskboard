import React from "react";
import "./navbar.css";
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css'
function Navbar() {
  return (
    <div className="flex head db">
      <div className="flex ">
        <div className="logo flex">
          <div className="logo-icon"></div>
          <div className="logo-text">
            <b>TaskBoard</b>{" "}
          </div>
        </div>
        <div className="search flex">
          <input type="text" placeholder="search" />
          <button className="search-icon"></button>
        </div>
      </div>
      <div className="flex ">
        <div className="noti-icon"></div>
        <div className="profile-box flex">
          <div className="profile-pic "></div>
          <div className="profile-text">
            <div className="profile-name">john doe</div>
            <div className="profile-designation">software developer</div>
          </div>
          <div className="profile-dropdown flex">
            <div className="drop"></div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
