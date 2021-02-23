import React from "react";

// 3rd party
import {
  Link
} from "react-router-dom";
import { List, ListItem, ListItemText, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


// 
import { protectedLinks, publicLinks} from '../../constants/routes';


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
      textTransform: `capitalize`,
      color: `white`
    },
    linkTextMobile:{
        textDecoration: `none`,
        textTransform: `uppercase`,
        color:'black'
    },
    navDisplayBlock: {
        display:`block`
    }
  
}));

export default function Navigation (props) {
    const authUser = {name:null}
    return (
        <>
            { authUser.name ? <AuthRoutes isDrawer={props.isDrawer}/> : <NonAuthRoute isDrawer={props.isDrawer}/> } 
        </>
    )
}

function AuthRoutes(props) {
    const classes = useStyles();
    const { isDrawer } = props;

    return (
        <List 
            component="nav"
            aria-labelledby="main navigation"
            className={isDrawer ? classes.navDisplayBlock :classes.navDisplayFlex}
        >
            <Navigation list={protectedLinks} isDrawer={isDrawer} />
            
            <Button color="inherit">Logout</Button>
        </List>
    )
}

function NonAuthRoute(props) {
    const classes = useStyles();
    const { isDrawer } = props;

    return (
        <List 
            component="nav"
            aria-labelledby="main navigation"
            className={isDrawer ? classes.navDisplayBlock :classes.navDisplayFlex}
        >
            <NavList list={publicLinks} isDrawer={isDrawer} />
        </List>
    )
}

// navigation list
function NavList({ list, isDrawer }) {
    const classes = useStyles();

    if(isDrawer) {
        return (
            <>
                {list.map(({title, path}) => (
                    <Link to={path} className={classes.linkTextMobile} key={title}>
                        <ListItem button>
                            <ListItemText primary={title} />
                        </ListItem>
                    </Link>
                ))}
            </>
        )
    } else {
        return (
            <>
                {list.map(({title, path}) => (
                    <Link to={path} className={classes.linkText} key={title}>
                    <ListItem button>
                        <ListItemText primary={title} />
                    </ListItem>
                    </Link>
                ))}
            </>
        )
    }
}