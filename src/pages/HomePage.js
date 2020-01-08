import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import PhotoGallery from '../components/PhotoGallery';

const HomePage = () => {
  
 
     return (
       <React.Fragment>           
       <CssBaseline />       
         <PhotoGallery />
       </React.Fragment>           
     );
 }


 export default HomePage;