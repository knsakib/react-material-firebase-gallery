import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {auth, signInWithGoogle} from '../firebase/firebase.utils';


const useStyles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class SignIn extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }  
      }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password}= this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            },
                () => this.props.history.push('/') //as soon as the setState finishes
            )
        }catch(error){
            console.log(error);
        }
        
    }

    handleChange = event => {
        const { value, name} = event.target;
        this.setState({
            [name]: value
        })
    }    

    render() {

        const { classes } = this.props;

            return (

                <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    
                    
                    <Typography component="h1" variant="h5">
                    Sign in
                    </Typography>
                    {
                    
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                onClick={signInWithGoogle}>
                                Sign In With Google
                            </Button>
                   
                    }
                </div>
                
                </Container>
            );
        }
}

export default withStyles(useStyles)(SignIn)