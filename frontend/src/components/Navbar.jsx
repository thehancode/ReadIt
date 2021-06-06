import React from "react";
import { Link as LinkS} from "react-scroll";

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
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexGrow: 1,
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

const Navbar = () => {

  const classes = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar className={classes.navbar}>
          <div className={classes.navLogo}><span>Read<b>It</b></span></div>
          <div className={classes.navMenu}>
            <LinkS className={classes.submenu}
                  to="home-slider"
                  spy= {true}
                  smooth={true}
                  offset={-64}
                  duration={1000}>
            Inicio</LinkS>
            <LinkS className={classes.submenu}
                  to="home-what-is-readit"
                  spy= {true}
                  smooth={true}
                  offset={-64}
                  duration={1000}>
            ¿Qué es readIt?</LinkS> 
            <LinkS className={classes.submenu}
                  to="home-services"
                  spy= {true}
                  smooth={true}
                  offset={-64}
                  duration={1000}>
            Servicios</LinkS>                   
            <Link href="/login" color="inherit"  underline="none" className={classes.submenu}>Ingresar</Link>   
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
};

export default Navbar;


