import React, { Component } from 'react';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import { Route, Switch } from 'react-router-dom';

import MenuBar from './components/MenuBar';
import PhotoGallery from './components/PhotoGallery';

import HomePage from './pages/HomePage';

import SignIn from './pages/SignIn';


import Photo from './components/Photos';

import { auth, createUserProfileDoc } from './firebase/firebase.utils'

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://code-gallery.web.app/">
        Code Gallery
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#f0f0f0'
    
    },
    primary: {
      light: '#b26046',
      main: '#ff8a65',
      dark: '#ffa183',
      contrastText: '#000',
    },
    secondary: {
      light: '#008c3a',
      main: '#00c853',
      dark: '##33d375',
      contrastText: '#fff',
    },
  },
});

class App extends Component{

  constructor() {
    super();
    this.state = {
      Photo: Photo,
    }  
  }

  unsubscribeFromAuth = null

  componentDidMount(){

    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      // this.setState({ currentUser: user});
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapShot=>{
          // this.setState({
            setCurrentUser({
  
              id: snapShot.id,
              ...snapShot.data() //getting all the snapShot.data
            
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
      return (
        <ThemeProvider theme={theme}>
            <NavBar />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/photogallery' component={PhotoGallery} />
              
              { this.props.currentUser ?
              <Route exact path='/signin' component={HomePage} />
              :
              <Route exact path='/signin' component={SignIn} />
              }

              { this.props.currentUser ?
              <Route exact path='/signup' component={HomePage} />
              :
              <Route exact path='/signup' component={SignUp} />
              }

              <Route path='/editphoto/:{Photo.linkUrl}' component={EditPhoto} />

            </Switch>
            <Box mt={5}>
              <Copyright />
            </Box>
      </ThemeProvider>

      );
  };
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);