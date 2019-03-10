import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 640, clear: "both", paddingTop: 200, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}




export default Jumbotron;


