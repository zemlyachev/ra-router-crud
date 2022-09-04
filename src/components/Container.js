import React from "react";

export default function Container(props) {
  return (
    <div className="container">
      <div
        className="border m-auto"
        style={{ width: "500px", background: "rgb(240,240,240)" }}
      >
        {props.children}
      </div>
    </div>
  );
}
