import React from "react";

export default function Picture(props) {
  return (
    <div className="box">
      <h1>{props.postdata.title}</h1>
    </div>
  );
}
