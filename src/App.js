import React from 'react';

// 3rd party components
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Container, Hidden} from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// local component
import Navigation from './components/Navigation';
import SideDrawer from './components/SideDrawer.js';


// 
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `titlecase`,
    color: `white`
  }

}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
      setOpen(false);
  };

  const handleDrawerOpen = () => {
      setOpen(true);
  };

  return (
    <Router>
      {/* <Navigation /> */}

      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Container maxWidth="md" className={classes.navbarDisplayFlex}>
              <IconButton 
                edge="start" 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="menu"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>

              <Hidden smDown>
                  <Navigation isDrawer={false} />
              </Hidden>

              <Hidden mdUp>
                  <SideDrawer open={open} handleDrawerClose={handleDrawerClose} />
              </Hidden>
              
            </Container>
          </Toolbar>
        </AppBar>
      </div>
      
      <Switch>
        {/* component or pages */}
      </Switch>
    </Router>
  );
}

export default App;
