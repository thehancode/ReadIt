import React, { useState, useEffect } from 'react';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import { SpeechProvider, useSpeechContext } from "@speechly/react-client";
import * as Poem from "../services/PoemService";

const appId = "a74f6df7-a674-4b8e-93e7-e7d462a558f5";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
const speechRecognition = new SpeechlySpeechRecognition();

const RandomPoem = ()=>{
    const [transcription, setTranscription] = useState('');
    const [poem, setPoem] = useState({
        content:"",
        author:"",
        title:""
    })
    useEffect(() => {
        speechRecognition.onresult = handleResult;
    });
    const { segment } = useSpeechContext()
    const handleResult = ({ results }) => {
        console.log("results: ",results);
        const { transcript } = results[0][0];
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
        <div>
             {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
            <div>
                <p>Titulo: {poem.title}</p>
                <p>Contenido: {poem.content}</p>
                <p>Autor: {poem.author}</p>
            </div>
            <p>Presione el botón y diga "Quote"</p>
             <button
            onTouchStart={speechRecognition.start}
            onTouchEnd={speechRecognition.stop}
            onMouseUp={speechRecognition.stop}
            onMouseDown={speechRecognition.start}
            >Hold to talk</button>
            <div>
                {segment ? <div className="segment">{segment.words.map(w => w.value).join(' ')}</div> : null}
            </div>
            <p>{transcription}</p>
        </div>
    )
}

export default RandomPoem;