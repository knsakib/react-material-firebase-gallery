import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import SinglePhoto from './SinglePhoto';

import Photos from './Photos';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class PhotoGallery extends React.Component {
 constructor() {
   super();
   this.state = {Photos}  
 }

     render() {
    
     const { classes } = this.props;

     return (
     <div className={classes.root}>
       <Grid container >
       {this.state.Photos.map(({ id, ...otherSectionProps }) => (
             <Grid item key={id} xs={12} sm={4} md={2}>
              
                 <SinglePhoto  {...otherSectionProps} />
              
             </Grid>
         ))}
       </Grid>
     </div>
     );
   }
 }

export default withStyles(useStyles)(PhotoGallery);
