import React from "react";
import Link from '@material-ui/core/Link';
import { AppBar, makeStyles, Toolbar, Typography} from "@material-ui/core"

const useStyles = makeStyles((theme)=>({
  offset: theme.mixins.toolbar,
  navbar:{
    backgroundColor: '#22252C',
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  navLogo:{
    flexGrow: 1,
    fontSize: '28px',
  },
  navMenu:{    
    fontSize: '18px',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 4,
    justifyContent: 'flex-end',    
  },
  submenu:{
    margin: '0 1.5em',
    '&:hover': {
      color:'#C0B3A0',
    }

  }
}));

const Navbar = () => {

  const classes = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar className={classes.navbar}>
          <Typography variant="p" color="inherit" className={classes.navLogo}>Read<b>It</b></Typography>
          <Typography variant="p" color="inherit" className={classes.navMenu}>
            <Link href="/home" color="inherit" underline="none" className={classes.submenu}>Inicio</Link>
            <Link href="/" color="inherit"  underline="none" className={classes.submenu}>¿Qué es readIt?</Link> 
            <Link href="/" color="inherit"  underline="none" className={classes.submenu}>Servicios</Link>        
            <Link href="/read" color="inherit"  underline="none" className={classes.submenu}>Leer libro</Link>            
            <Link href="/" color="inherit"  underline="none" className={classes.submenu}>Ingresar</Link>   
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
};

export default Navbar;
