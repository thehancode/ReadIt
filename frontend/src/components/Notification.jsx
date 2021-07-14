import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    position: 'fixed',
    bottom: 0,
    right: 0,
    width: 300,
    zIndex: 5,
  },
}));

/* 
type: 
'error'
| 'info'
| 'success'
| 'warning' 


*/

export default function Notification(props) { // props--> open(true-false), tipo, setOpen(function), mensaje
    const classes = useStyles();
    var msg = props.mensaje;
    return (
    <div className={classes.root}>
        <Collapse in={props.open}>
        <Alert
            severity={props.tipo}
            variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                props.setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {msg}
        </Alert>
      </Collapse>
    </div>
    );
}
