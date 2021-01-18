import React from "react";
import "./sidebar.css";
var listed = [
  "Boards",
  "Plan Schedule",
  "Reporting",
  "Messages",
  "Team Member",
  "Tools plugin",
  "Roadmap",
  "Settings",
];
function Sidebar() {
  return (
    <ul className='sidebar'>
      {listed.map((text) => {
        return <li key={text}> {text}</li>;
      })}
    </ul>
  );
}

export default Sidebar;
