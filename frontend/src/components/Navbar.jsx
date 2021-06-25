import React from "react";
import { Link as LinkS } from "react-scroll";

import { AppBar, makeStyles, Toolbar, Hidden, IconButton, Link } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme)=>({
  offset: theme.mixins.toolbar,
  navbar:{
    backgroundColor: '#22252C',
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navLogo:{
    display: 'flex',
    marginLeft: '1em',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexGrow: 1,
    fontSize: '30px',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      marginRight: '1em',
      justifyContent: 'flex-end',
      flexDirection: 'row',
      flexGrow: 1,
      fontSize: '24px',
    },
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
  },
}));

const Navbar = (props) => {

  const classes = useStyles();

  return (
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.navbar}>
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={()=>props.openDrawer()}
              className={classes.menuButton}
            >
              <MenuIcon />
          </IconButton>          
          <div className={classes.navLogo}><span>Read<b>It</b></span></div>
          </Hidden>
          <Hidden xsDown>              
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
          </Hidden>
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;