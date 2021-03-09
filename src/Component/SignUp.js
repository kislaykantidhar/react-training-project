import React, { useState } from 'react';
import { Button,TextField } from "@material-ui/core";
import {signUpController} from '../Controllers/authController';
const SignUp = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        value = {password}
        onChage = {(event)=>{
            event.preventDefault();
            setPassword(event.target.value);
        }}
        />
        <Button color='primary'>Sign Up</Button>
    </form>
    )
    
}
export default SignUp;