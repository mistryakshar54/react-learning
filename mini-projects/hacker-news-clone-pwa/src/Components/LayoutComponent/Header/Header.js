import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink} from 'react-router-dom';
import Container from "@material-ui/core/Container";
const useStyles = makeStyles(theme => ({
  link: {
    padding: theme.spacing(1, 3),
    margin: '0px 8px',
    justifyContent:'flex-end',
    color:'white',
    textTransform:'none',
    cursor:'pointer',
    textDecoration:'none',
    fontSize:'1.2em',
    fontWeight:'bold',
    height:'100%',
    '&:hover' : {
        textDecoration:'none'
    },
  },
  toolbar:{
      alignItems:'flex-end',
  },
  active:{
      borderBottom:'5px solid white'
  },
  nav:{
      width: '100%',
      display: 'flex',
      alignItems:'flex-start',
      height:'100%'
  }

}));

const HeaderComponent = ( props ) => {
const navItems = [
  { itemName: "Top", url: "/top" },
  { itemName: "New", url: "/new" },
  { itemName: "Ask", url: "/ask" },
  { itemName: "Show", url: "/show" },
  { itemName: "Jobs", url: "/jobs" }
];
const classes = useStyles();
    return (
      <AppBar position="relative">
        <Toolbar className={classes.toolbar}>
          <Container  maxWidth="lg" style={  { height:'50px' }}>

          <nav className={classes.nav}>
            <Typography variant="h6" color="inherit" noWrap>
              Hacker News Clone
            </Typography>
            {/* <div> */}
                {navItems.map((navItem, index) => {
                return (
                    <NavLink
                    key={`nav-item-${index}`}
                    activeClassName={classes.active}
                    className={classes.link}
                    to={navItem.url}
                    >
                    {navItem.itemName}
                    </NavLink>
                );
                })}
            {/* </div> */}
          </nav>
          </Container>
        </Toolbar>
      </AppBar>
    );
};

export default HeaderComponent;