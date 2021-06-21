import React from "react";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

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
        width: '100%',
    },
    navMenuLeft: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '70%'
    },
    navMenuRight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '30%'
    },
    navMenuLeft__Logo:{
        fontSize: '30px',        
        position: 'relative',        
        bottom: '10px',
    },
    submenu:{
        margin: '0 1.5em',
        '&:hover': {
        color:'#C0B3A0',
        cursor:'pointer',
        }
    },
    submenu__image:{
        margin: '0 0.5em 0 0',
        background: 'none',
        '&:hover': {
        color:'#C0B3A0',
        cursor:'pointer',
        }
    },
}));

const NavbarHome = (props) => {

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
                <div className={classes.navMenuLeft}>
                    <span className={classes.navMenuLeft__Logo}>Read<b>It</b></span>
                    <Link href="#" color="inherit"  underline="none" className={classes.submenu}>Biblioteca</Link>
                    <Link href="#" color="inherit"  underline="none" className={classes.submenu}>Mis Libros</Link>
                    <Link href="#" color="inherit"  underline="none" className={classes.submenu}>Mis Notas</Link>
                </div>
                <div className={classes.navMenuRight}>
                    <Link href="#" color="inherit"  underline="none" className={classes.submenu}>
                        Mi Cuenta
                    </Link>
                </div>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
  );
};

export default NavbarHome;
