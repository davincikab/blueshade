import React from 'react';

// 3rd party components
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { List, ListItem, ListItemText, Container} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

// local component
import Navigation from './components/Navigation';


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

  const preventDefault = (event) => {
    event.preventDefault();
  }

  return (
    <Router>
      {/* <Navigation /> */}

      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Container maxWidth="md" className={classes.navbarDisplayFlex}>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>

              <Navigation />
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
