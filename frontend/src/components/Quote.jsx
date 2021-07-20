import React, { useState, useEffect } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import { SpeechProvider, useSpeechContext } from "@speechly/react-client";
import * as QuoteService from "../services/QuoteService";
import { makeStyles } from "@material-ui/core/styles";
import {
    Container,
    Typography,
    Button,
  } from "@material-ui/core";


const appId = "a74f6df7-a674-4b8e-93e7-e7d462a558f5";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
const speechRecognition = new SpeechlySpeechRecognition();

const Quote = ()=>{
    const useStyles = makeStyles(()=>({
        container:{
            fontFamily: "Prata,serif",
            color: "#3F3250",
            marginLeft: "10%",
            marginRight: "10%",
        },
        title:{
            fontWeight: "900",
            fontSize: "1.8rem",
            letterSpacing: "4px",
            textDecoration: "underline black"
        },
        content:{
            fontSize: "1.3rem",
            fontWeight: "600",
            fontFamily: "sans-serif",
            lineHeight: "1.48",
            quotes: "inherit",
            "&:before":{
                content: "open-quote",
            },
            "&:after":{
                content: "close-quote",
            }
        },
        author:{
            fontSize: "1.0rem",
            fontStyle: "italic",
            lineHeight: "1.3",
            marginTop: "5%",
            fontWeight: "300",
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
    const [quote, setQuote] = useState({
        content:"",
        author:"",
        title:""
    })
    useEffect(() => {
        speechRecognition.onresult = handleResult;
    });
    useEffect(()=>{
        QuoteService.quoteOfDay().then(
            (response) => {
                console.log(response)

                let newQuote = {
                    title: "Frase del Día",
                    author: "Mahatma Gandhi",
                    content: "You must be the change you wish to see in the world.",
                }
                if (response){
                    newQuote = {
                        title: response.title,
                        author: response.author,
                        content: response.quote,
                    }
                }
                setQuote(newQuote)
            },
            (error) => {
              console.log("error al obtener Quotea",error)
            }
        );
    },[])
    const { segment } = useSpeechContext()
    const handleResult = ({ results }) => {
        const { transcript } = results[0][0];
        console.log("results: ",results);
        setTranscription(transcript);
        if(transcript.indexOf("NEW QUOTE") !== -1){
            QuoteService.randomQuote().then(
                (response) => {
                    console.log(response)
                    let newQuote = {
                        author: response.author,
                        title: response.title,
                        content: response.quote,
                    }
                    setQuote(newQuote)
                },
                (error) => {
                  console.log("error al obtener Quotea",error)
                }
            );
        }
    };
    return(
        <div className={classes.container}>
             {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
            <div>
                <p> 
                    <span className={classes.title}>{quote.title}</span>
                </p>
                <p> 
                    <span className={classes.content}>{quote.content}</span>
                </p>
                <p> 
                    <span className={classes.author}>-{quote.author}</span>
                </p>
            </div>
            <p>Presione el botón y diga "New Quote" para obtener una nueva frase</p>
             <Button
            onTouchStart={speechRecognition.start}
            onTouchEnd={speechRecognition.stop}
            onMouseUp={speechRecognition.stop}
            onMouseDown={speechRecognition.start}
            className={classes.button}
            >Mantener pulsado para hablar</Button>
            <div>
                {segment ? <div className="segment">{segment.words.map(w => w.value).join(' ')}</div> : null}
            </div>
            <p>{transcription}</p>
        </div>
    )
}

export default Quote;