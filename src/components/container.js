import React, { useEffect, useState } from "react";
import axios from "axios";
import Picture from "./picture";

export default function Container() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=WJxMnEZ1krL5VvxfvpAAdRqlq7kpFGeAa0TDzbte"
      )
      .then(response => {
        console.log("this is the data", response.data);
        setData(response.data);
      })
      .catch(error => {
        console.log("this data is unable to be retrieved", error);
      });
  }, []);

  return (
    <div>
      <Picture postdata={data} />

      <h3 className="info">{data.explanation}</h3>
    </div>
  );
}
