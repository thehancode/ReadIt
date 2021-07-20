import React, { useState, useEffect } from "react";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import { makeStyles } from "@material-ui/core/styles";

const appId = "a74f6df7-a674-4b8e-93e7-e7d462a558f5";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
const speechRecognition = new SpeechlySpeechRecognition();

speechRecognition.continuous = true;
speechRecognition.interimResults = true;

function Microphone(props) {
  const useStyles = makeStyles(() => ({
    container: {
      fontFamily: "Prata,serif",
      color: "rgb(255, 221, 163)",
      display:"flex",
      "flex-direction":"column",
      "justify-content":"center",

      marginLeft: "10px",   
      marginRight: "10px",


    },
    button: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundImage:
        "url(https://cdn.pixabay.com/photo/2018/05/16/19/07/microphone-3406764_640.png)",
      "background-size": "cover",
      "&:active": {
        backgroundImage:
          "url(https://cdn.pixabay.com/photo/2018/05/15/20/47/microphone-3404243_960_720.png)"
      },
      "&:hover":{
        cursor: "pointer",
      }
    },
    transciption: {
      fontSize: "1.3rem",
      fontWeight: "600",
      fontFamily: "sans-serif",
      lineHeight: "1.48",
      quotes: "inherit",
      margin: "20px",
      "&:before": {
        content: "open-quote"
      },
      "&:after": {
        content: "close-quote"
      }
    }
  }));
  const classes = useStyles();

  const [transciption, setTranscription] = useState("");
  const [showTranscrip, setShow] = useState(false);

  //const { segment } = useSpeechContext();
  const handleResult = ({ results }) => {
    console.log("results: ", results);
    const { transcript } = results[0][0];
    setTranscription(transcript);
    if (props.setResult != undefined) {
      props.setResult(transcript.toLowerCase());
    }
  };
  useEffect(() => {
    speechRecognition.onresult = handleResult;

  }, []);
  
  return (
    <div className={classes.container}>

      <button
        className={classes.button}
        onTouchStart={speechRecognition.start}
        onTouchEnd={ (params)=>{ speechRecognition.stop(params) ; alert ("")} }
        onMouseUp={speechRecognition.stop}
        onMouseDown={speechRecognition.start}
      ></button>
      {
        (props.show)?
        <span className={classes.transciption}>{transciption}</span>
        :
        <div/>
      }
    </div>
  );
}

export default Microphone;
