import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import SaveIcon from '@material-ui/icons/Save';

const Clock = (props)=>{
    const useStyles = makeStyles(() => ({
        times: {
            width: "100%",
            display: "flex",
            "flex-direction": "column",
            'justify-content': "center",
            color: "#3F3250",
        },  
        'times-content': {
            display: "inline-block",
            margin: "0 auto",
            width: "300px",
            height: "300px",
            "margin-top": "25px",
            display: "flex",
            display: "-webkit-flex",
            "flex-direction": "column",
            "align-items": "center",
            "justify-content": "center",
            border: "5px solid #22252C",
            "border-radius": "50%",
            "background-image": 'url(https://i.pinimg.com/originals/c1/d5/70/c1d5703f39eeddbdf4757404d01c713d.png)',
            "background-size": "cover",
          },
          'timer-label': {
            "font-size": "2rem",
            "font-weight": "700"
          },
          'time-left': {
            "font-size": "4rem",
            "font-weight": "700"
          },
          panelControl:{
            flexGrow:"1",
          },
          clockButton:{
            border: "5px solid #22252C",
            "border-radius": "50%",
            margin: "10px 30px 0px 30px"
          }
    }));
    const formatTime = (timeLeftInSecond) => {
      let minute = Math.floor(timeLeftInSecond / 60);
      if (minute < 10) minute = '0' + minute;
    
      let second = timeLeftInSecond - 60 * minute;
      if (second < 10) second = '0' + second;
      return `${minute}:${second}`;
    }
    const classes = useStyles();
    const time = props.timer;
    const setTimer = props.function;
    
    /* const handleSaveTimer = (event)=>{
      alert(`Save time ${time.segundos}`)
    } */
    const handleAddTime = (event)=>{
        setTimer(time + 60)
    }
    const handleSubTime = (event)=>{
      setTimer(time - 60)
    }
    /* useEffect(()=>{
      console.log(props.timer);
    },[]) */
    return (
      <div className={classes.times}>
        <label className={classes['timer-label']}>{"Recordatorio de descanso"}</label>
        <div className={classes['times-content']}>
          
          <span className={classes['time-left']}>{formatTime(time)}</span>
          <label className={classes['timer-label']}>{"minutos"}</label>
        </div>
        <div className={classes.panelControl}>
          <IconButton onClick={handleSubTime} className={classes.clockButton} color="primary" aria-label="upload picture" component="span">
            <RemoveIcon fontSize="large" />
          </IconButton>
          <IconButton onClick={handleAddTime} className={classes.clockButton} color="primary" aria-label="upload picture" component="span">
            <AddIcon fontSize="large" />
          </IconButton>
        </div>
        {/* <div className={classes.panelControl}>
        <IconButton onClick={handleSaveTimer} className={classes.clockButton} color="primary" aria-label="upload picture" component="span">
            <SaveIcon fontSize="large" />
          </IconButton>
        </div> */}
      </div>
    )
}

export default Clock;