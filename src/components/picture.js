import React from "react";
import Buttons from "./buttons";

export default function Picture(props) {
  return (
    <div className="box">
      <h1>{props.postdata.title}</h1>
      <h2>{props.postdata.date}</h2>
      <img style={{ width: 500 }} alt="" src={props.postdata.hdurl} />
      <Buttons />
      <h3>{props.postdata.copyright}</h3>
    </div>
  );
}
