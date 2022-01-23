/*
1. Install dependencies DONE
2. Import dependencies DONE
3. Setup webcam and canvas
4. Defiine references to these DONE
5. Load posenet DONE
6. Detect Function DONE
7. Drawing utilities from tensorflow DONE
8. Draw functions
*/




import React, { useRef } from 'react';

import './App.css';
import * as tf from '@tensorflow/tfjs';
import * as posenet from '@tensorflow-models/posenet';
import * as poseDetection from '@tensorflow-models/pose-detection';
import Webcam from 'react-webcam';
import { drawKeypoints, drawSkeleton } from "./utilities";
import { passarray} from "./analyzefile.js";

let Posesjson = [];
let index = 0;
const start = Date.now();


///import Liz's part here

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  
// Load posenet
/*const runPosenet = async () =>{
  const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
  const net = await detector.load({
    inputResolution:{width:640, height:480},
    scale:0.5
  });
  //
  setInterval(()=> {
    movenetdetect(net)
  }, 100);
};*/

const detect = async (net) =>{
  if(typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState===4 ){
    // Get Video Properties
    const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set video Width
    webcamRef.current.video.width = videoWidth;
    webcamRef.current.video.height = videoHeight;

    // Make detections
    const pose = await net.estimateSinglePose(video);
    
    drawCanvas(pose, video, videoWidth, videoHeight, canvasRef);
  }
};


const movenetdetect = async () =>{
  if(typeof webcamRef.current !== "undefined" && webcamRef.current !== null && webcamRef.current.video.readyState===4 ){
    
    // Get Video Properties
    const video = webcamRef.current.video;
    const videoWidth = webcamRef.current.video.videoWidth;
    const videoHeight = webcamRef.current.video.videoHeight;

    // Set video Width
    
    //const detectorConfig = {modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING};
    
    

    const poseImage = document.getElementById("poseImage");

    poseImage.src = webcamRef.current.getScreenshot();
    poseImage.onload = estimatePoses;

    // Make detections
    //const pose = await net.estimateSinglePose(video);
    
    // console.log(poses);
    
    //drawCanvas(poses, video, videoWidth, videoHeight, canvasRef);
    
  }
};

const estimatePoses = async () =>{

  const detector = await poseDetection.createDetector(poseDetection.SupportedModels.MoveNet);
  let poses = await detector.estimatePoses(document.getElementById("poseImage"));
  console.log(poses[0]["keypoints"]);
  //Posesjson = [Posesjson, poses];  
  Posesjson.push(poses);
  if (index == 20){
    passarray(Posesjson);
    Posesjson = [];
  }
  else if (index == 40){
    Posesjson = []; 
  }
  else if (index == 80){
    passarray(Posesjson);
    Posesjson = []; 
  }
  else if (index == 100){
    Posesjson =[];
  }
  else if (index == 130){
    passarray(Posesjson);
    Posesjson = [];
  }

  

  //const millis = Date.now() - start;

  //drawCanvas(poses, canvasRef);

  const ctx = canvasRef.current.getContext("2d");
  //const ctx = document.getElementById("myCanvas").getContext("2d");
  canvasRef.current.width = webcamRef.current.video.width;
  canvasRef.current.height = webcamRef.current.video.height;


  drawKeypoints(poses[0]["keypoints"], 0.5, ctx);
  drawSkeleton(poses[0]["keypoints"], 0.5, ctx);
  index = index + 1;
};

const drawCanvas = (poses, canvas) => {
  const ctx = canvas.current.getContext("2d");
  //const ctx = document.getElementById("myCanvas").getContext("2d");
  canvas.current.width = webcamRef.current.video.width;
  canvas.current.height = webcamRef.current.video.height;


  drawKeypoints(poses[0]["keypoints"], 0.5, ctx);
  drawSkeleton(poses[0]["keypoints"], 0.5, ctx);
};
//runPosenet();
//runPosenet();
setInterval(movenetdetect, 500);


  return (
    <div className="App">
      <header className="App-header">
<header className="App-header">"Hello World"</header>
<img style= {{
position: "absolute", 
marginLeft: "auto", 
marginRight:"auto", 
left:0, 
right:0, 
textAlign:"center", 
zindex: 0,
width:640, 
height:480,
}}
 id="poseImage"></img>

<Webcam 
ref = {webcamRef}
style= {{
position: "absolute", 
marginLeft: "auto", 
marginRight:"auto", 
left:0, 
right:0, 
textAlign:"center", 
zindex: 9,
width:640, 
height:480,
}}
/>

<canvas 
ref={canvasRef}
id="myCanvas"
style= {{
  position: "absolute", 
  marginLeft: "auto", 
  marginRight:"auto", 
  left:0, 
  right:0, 
  textAlign:"center", 
  zindex: 10,
  width:640, 
  height:480,
}}/>

      </header>
    </div>
  );
}

export default App;
