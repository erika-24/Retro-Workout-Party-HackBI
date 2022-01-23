import React, { Component } from "react";
import { Link, useRouteMatch, Route } from "react-router-dom"
import SinglePage from './SinglePage'
import Box from '@material-ui/core/Box';
import Logo from './image2vector.svg'
import Video from "./video";
import Button from '../components/CustomButton.js'
import MyImage from "./google.png"
import App from "../../App"
import Header2 from "../components/Header2"

// let start = Date.now();
// let time = 0;
// let now = 0;

class Video_Screen extends Component {
  render() {
    return (


// now = Date.now();

// time = start - now;

// if (time == 5000) {
//   alert ("score")
// }

<div>
        <Header2 />
        <Video />
        <App/>
        <div className="button_container">
              <button className="workout_button1"> <Link to= ".."> Play again?</Link></button>
              <button className="workout_button2"> <Link to= "/Final"> See your results?</Link></button>
      </div> </div>
    );
  }
}

export default Video_Screen;

