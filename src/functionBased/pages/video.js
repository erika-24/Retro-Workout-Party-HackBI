import React, { Component } from "react";
import video1 from "./danceVid.mp4";


class Video extends Component {
  render() {
    return (
      <div>
          {/* <h1>80s workout</h1>  */}
        <video src={video1} width="300" height="300" controls="controls" autoplay="true" />
      </div>
    );
  }
}

export default Video;

