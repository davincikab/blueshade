import React from "react";

// 3rd party
import {
  Link
} from "react-router-dom";
import { List, ListItem, ListItemText, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


// 
import ROUTES from '../../constants/routes';


const useStyles = makeStyles((theme) => ({
    root: {
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

export default function Navigation (props) {
    const authUser = {name:null}
    return (
        <>
        {authUser.name ? <AuthRoutes /> : <NonAuthRoute /> }
            
        </>
    )
}

function AuthRoutes(props) {
    const classes = useStyles();
    return (
        <List 
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
        >
            <Link to={ROUTES.HOME} className={classes.linkText} >
                  <ListItem button>
                    <ListItemText primary="Home" />
                  </ListItem>
            </Link>

            <Link to={ROUTES.PLOT} className={classes.linkText} >
                  <ListItem button>
                    <ListItemText primary="Plots" />
                  </ListItem>
            </Link>

            <Link to={ROUTES.PROPERTY} className={classes.linkText} >
                  <ListItem button>
                    <ListItemText primary="Property" />
                  </ListItem>
            </Link>
            <Link to={ROUTES.TENANTS} className={classes.linkText} >
                  <ListItem button>
                    <ListItemText primary="Tenants" />
                  </ListItem>
            </Link>

            <Link to={ROUTES.RENT_PAYMENT} className={classes.linkText} >
                  <ListItem button>
                    <ListItemText primary="Rent" />
                  </ListItem>
            </Link>

            <Link to={ROUTES.ABOUT} className={classes.linkText} >
                  <ListItem button>
                    <ListItemText primary="About" />
                  </ListItem>
            </Link>

            <Button color="inherit">Logout</Button>
        </List>
    )
}

function NonAuthRoute(props) {
    const classes = useStyles();

    return (
        <List 
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
        >
            <Link to={ROUTES.HOME} className={classes.linkText} >
                  <ListItem button>
                    <ListItemText primary="Home" />
                  </ListItem>
            </Link>

            <Link to={ROUTES.PLOT} className={classes.linkText} >
                  <ListItem button>
                    <ListItemText primary="Plots" />
                  </ListItem>
            </Link>

            <Link to={ROUTES.PROPERTY} className={classes.linkText} >
                  <ListItem button>
                    <ListItemText primary="Property" />
                  </ListItem>
            </Link>
            <Link to={ROUTES.ABOUT} className={classes.linkText} >
                  <ListItem button>
                    <ListItemText primary="About" />
                  </ListItem>
            </Link>
            <Link to={ROUTES.SIGNIN} className={classes.linkText} >
                  <ListItem button>
                    <ListItemText primary="Login" />
                  </ListItem>
            </Link>
        </List>
    )
}