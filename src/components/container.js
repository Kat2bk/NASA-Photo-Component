import React, { useEffect } from "react";
import axios from "axios";

export default function Container() {
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=WJxMnEZ1krL5VvxfvpAAdRqlq7kpFGeAa0TDzbte"
      )
      .then(response => {
        console.log("this is the data", response);
      })
      .catch(error => {
        console.log("this data is unable to be retrieved", error);
      });
  }, []);

  return <></>;
}
