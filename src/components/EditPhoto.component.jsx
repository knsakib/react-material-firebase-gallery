import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';


const useStyles = makeStyles(theme => ({
 root: {
   display: 'flex',
   flexWrap: 'wrap',
   justifyContent: 'space-around',
   margin: '10px'
  
 },
 icon: {
   color: 'rgba(255, 255, 255, 0.54)',
 },
}));


export const EditGallery = ({id, img, title, author, cols, linkUrl}) => {

 const classes = useStyles();

 return (
   
         <GridListTile key={id} cols={cols || 1}>
           <img src={img} alt={title} />
           <GridListTileBar
             title={title}
             subtitle={<span>by: {author}</span>}
             actionIcon={
               <IconButton aria-label={`info about ${title}`} className={classes.icon} >
                 <InfoIcon />
               </IconButton>
             }
           />
         </GridListTile>
    
 );
}

export default EditGallery;