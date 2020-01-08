import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CssBaseline from '@material-ui/core/CssBaseline';

import Button from '@material-ui/core/Button';

import { withRouter } from "react-router-dom";

import {auth} from '../firebase/firebase.utils.js';

import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    title: {
      flexGrow: 1,
    },
    
  }));

const NavBar = ({history, currentUser}) => {
    const classes = useStyles();
    console.log(currentUser)
    return(
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    
                    <Typography  variant="h6" className={classes.title} onClick={() => history.push("/")} >                       
                            React MaterialUI FireBase Gallery                              
                    </Typography>
                    {
                        currentUser ? ( 
                            <div> Welcome {currentUser.displayName}
                                <Button color="inherit" onClick={() => auth.signOut()}>
                                Sign Out
                            </Button> 
                            </div>
                            
                            ) : ( 
                            <Button color="inherit" onClick={() => history.push("/signin")}>
                                Sign In
                            </Button> )
                    }
                                
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(withRouter(NavBar));