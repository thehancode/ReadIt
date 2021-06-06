import React from "react";

import Link from '@material-ui/core/Link';
import { AppBar, makeStyles, Toolbar} from "@material-ui/core"

const useStyles = makeStyles((theme)=>({
  offset: theme.mixins.toolbar,
  navbar:{
    backgroundColor: '#22252C',
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  navLogo:{
    display: 'flex',
    marginLeft: '1em',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'flex-start',
    fontSize: '30px',
  },
  navMenu:{    
    fontSize: '18px',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 4,
    justifyContent: 'flex-end',  
    height: '24px',  
  },
  submenu:{
    margin: '0 1.5em',
    '&:hover': {
      color:'#C0B3A0',
      cursor:'pointer',
    }

  }
}));

const NavbarLogin = () => {

  const classes = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar className={classes.navbar}>
            <div className={classes.navLogo}><span>Read<b>It</b></span></div>
            <div className={classes.navMenu}>
            <Link href="/" color="inherit"  underline="none" className={classes.submenu}>Inicio</Link>          
            <Link href="/login" color="inherit"  underline="none" className={classes.submenu}>Ingresar</Link>   
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
};

export default NavbarLogin;