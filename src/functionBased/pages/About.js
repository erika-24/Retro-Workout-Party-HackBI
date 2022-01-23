import React, { Component } from "react";
import { Link, useRouteMatch, Route } from "react-router-dom"
import SinglePage from './SinglePage'
import Box from '@material-ui/core/Box';
import Logo from './image2vector.svg'
import Video from "./video";
import Button from '../components/CustomButton.js'
import MyImage from "./google.png"

class Video_Screen extends Component {
  render() {
    return (
      <div>
        <Video />
        <a href="https://react.school" target="_blank">
  <Button> <img src={MyImage} /> </Button>
</a>
      </div>
    );
  }
}

export default Video_Screen;

