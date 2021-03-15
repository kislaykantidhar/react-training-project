import React, { useState } from 'react';
import { signIn } from '../Redux/actions';
import { connect } from 'react-redux';
import { Button,TextField } from "@material-ui/core";
import {getCurrentUser, signUpController} from '../Controllers/authController';


const mapDispatchToProps = (dispatch) => ({
    signInUser : (email, password)=>dispatch(signIn(email,password))
})

const SignUp = (props) =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signUpOperation = () => {
        signUpController(email,password)
        .then(user=>{
            return getCurrentUser();
        })
        .then(user=>{
            return user.updateProfile({
                displayName: name
            })
        })
        .then(onfullfilled=>{
            props.signInUser(getCurrentUser().email,getCurrentUser().uid);
        })
        .catch(error=>{
            alert(error.message);
        })
    }
    return(
        <form>
        <TextField
        name="name"
        variant="outlined"
        required
        fullWidth
        id="name"
        label="name"
        autoFocus
        value = {name}
        onChange = {(event)=>{
            event.preventDefault();
            setName(event.target.value);
        }}
        />
        <TextField
        name="email"
        variant="outlined"
        required
        fullWidth
        id="email"
        label="email"
        autoFocus
        value = {email}
        onChange = {(event)=>{
            event.preventDefault();
            setEmail(event.target.value);
        }}
        />
        <TextField
        name="password"
        variant="outlined"
        required
        fullWidth
        id="password"
        label="password"
        autoFocus
        type='password'
        value = {password}
        onChange = {(event)=>{
            event.preventDefault();
            setPassword(event.target.value);
        }}
        />
        <Button color='primary' onClick={()=>{signUpOperation()}}>Sign Up</Button>
    </form>
    )
    
}
export default connect(null,mapDispatchToProps)(SignUp);