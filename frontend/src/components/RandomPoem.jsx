import React, { useState, useEffect } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import { SpeechProvider, useSpeechContext } from "@speechly/react-client";
import * as Poem from "../services/PoemService";
import { makeStyles } from "@material-ui/core/styles";
import {
    Container,
    Typography,
    Button,
  } from "@material-ui/core";

const appId = "a74f6df7-a674-4b8e-93e7-e7d462a558f5";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
const speechRecognition = new SpeechlySpeechRecognition();

const RandomPoem = ()=>{
    const useStyles = makeStyles(()=>({
        container:{
            fontFamily: "Prata,serif",
            color: "#3F3250",
            marginLeft: "10%",
            marginRight: "10%",
        },
        title:{
            fontWeight: "900",
            fontSize: "1.7rem",
            letterSpacing: "4px",
            textDecoration: "underline black"
        },
        content:{
            fontSize: "1rem",
            fontWeight: "600",
        },
        author:{
            fontStyle: "italic",
            lineHeight: "1.3",
            marginTop: "5%",
            fontWeight: "200",
        },
        button:{
            color:"white",
            "&:hover":{
                backgroundColor:"#E14658",
              },
              backgroundColor:"#22252C",
              margin:"2em",
              backgroundImage: "none",
              textTransform: "none",
        },
    }))
    const classes = useStyles();
    const [transcription, setTranscription] = useState('');
    const [poem, setPoem] = useState({
        content:"",
        author:"",
        title:""
    })
    useEffect(() => {
        speechRecognition.onresult = handleResult;
    });
    useEffect(()=>{
        Poem.randomPoem().then(
            (response) => {
                console.log(response)
                let newPoem = {
                    author: response.data[0].poet.name,
                    title: response.data[0].title,
                    content: response.data[0].content 
                }
                setPoem(newPoem)
            },
            (error) => {
              console.log("error al obtener poema",error)
            }
        );
    },[])
    const { segment } = useSpeechContext()
    const handleResult = ({ results }) => {
        const { transcript } = results[0][0];
        console.log("results: ",results);
        setTranscription(transcript);
        if(transcript.indexOf("QUOTE") !== -1){
            Poem.randomPoem().then(
                (response) => {
                    console.log(response)
                    let newPoem = {
                        author: response.data[0].poet.name,
                        title: response.data[0].title,
                        content: response.data[0].content 
                    }
                    setPoem(newPoem)
                },
                (error) => {
                  console.log("error al obtener poema",error)
                }
            );
        }
    };
    return(
        <div className={classes.container}>
             {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
            <div>
                <p> 
                    <span className={classes.title}>{poem.title}</span>
                </p>
                <p> 
                    <span className={classes.content}>{poem.content}</span>
                </p>
                <p> 
                    <span className={classes.author}>-{poem.author}</span>
                </p>
            </div>
            <p>Presione el botón y diga "Quote"</p>
             <Button
            onTouchStart={speechRecognition.start}
            onTouchEnd={speechRecognition.stop}
            onMouseUp={speechRecognition.stop}
            onMouseDown={speechRecognition.start}
            className={classes.button}
            >Hold to talk</Button>
            <div>
                {segment ? <div className="segment">{segment.words.map(w => w.value).join(' ')}</div> : null}
            </div>
            <p>{transcription}</p>
        </div>
    )
}

export default RandomPoem;