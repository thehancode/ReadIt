import React from "react";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import { AppBar, makeStyles, Toolbar, Hidden, IconButton, Link, Menu, MenuItem, Button } from "@material-ui/core"

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
        width: '30%',
        position: 'relative',
        right: '10px'
    },
    navMenuLeft__Logo:{
        fontSize: '30px',        
        position: 'relative',        
        bottom: '10px',
    },
    navMenuRight__icon: {
        paddingRight: '10px',
    },
    navMenuRight__text: {
        paddingRight: '10px',
        textTransform: 'capitalize',
        fontWeight: 400,
        fontSize: '18px',
    },
    submenu:{
        margin: '0 1.5em',
        '&:hover': {
        color:'#C0B3A0',
        cursor:'pointer',
        }
    },
}));

const NavbarHome = (props) => {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [auth] = React.useState(true);

  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
                {auth && (
                    <div className={classes.navMenuRight}>
                        <Button 
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                            size='large'
                        >
                            <AccountCircleOutlinedIcon className={classes.navMenuRight__icon}/><span className={classes.navMenuRight__text}>Mi Cuenta</span>
                        </Button>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                            }}
                            open={open}
                            onClose={handleClose}
                         >
                            <MenuItem onClick={handleClose}>Configuración</MenuItem>
                            <MenuItem onClick={handleClose}>Temporizador</MenuItem>
                            <MenuItem onClick={handleClose}>Salir</MenuItem>
                        </Menu>
                    </div>
                )}
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
  );
};

export default NavbarHome;
