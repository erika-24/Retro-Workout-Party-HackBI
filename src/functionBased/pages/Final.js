import React, { Component } from "react";
import { Link, useRouteMatch, Route } from "react-router-dom"
import SinglePage from './SinglePage'
import Box from '@material-ui/core/Box';
import Logo from './image2vector.svg'
import Video from "./video";
import Button from '../components/CustomButton.js'
import Final_Header from "../components/Final_Header"

class Video_Screen extends Component {
  render() {
    return (
      <div>
        <Final_Header />
        <div className="results-box">
          <h2>Score: 87%</h2> 
          <h2>Totally tubular!</h2>
        </div>

        <div className="button_container1">
              <button className="workout_button1"> <Link to= ".."> Play again?</Link></button>
              <button className="workout_button1"> <Link to= ".."> Mini games </Link></button>
          
              </div> </div>
    );
  }
}

export default Video_Screen;
