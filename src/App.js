import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import PhotoGallery from './components/PhotoGallery';
import HomePage from './pages/HomePage';
import SignIn from './pages/SignIn';
import Photo from './components/Photos';
import { auth } from './firebase/firebase.utils'
import theme from './helpers/theme';

class App extends Component{

 constructor() {
   super();
   this.state = {
     Photo: Photo,
     currentUser: null
   } 
 }

 unsubscribeFromAuth = null

 componentDidMount(){
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user =>{
     this.setState({ currentUser: user});
   })
 }
  componentWillUnmount(){
   this.unsubscribeFromAuth();
 }

 render() {
     return (
       <ThemeProvider theme={theme}>
           <NavBar currentUser={this.state.currentUser} />

           <Switch>
             <Route exact path='/' component={HomePage} />
             <Route path='/photogallery' component={PhotoGallery} />
            
             { this.state.currentUser ?
             <Route path='/signin' component={HomePage} />
             :
             <Route path='/signin' component={SignIn} />
             }


           </Switch>
           
     </ThemeProvider>

     );
 };
}

export default App;
