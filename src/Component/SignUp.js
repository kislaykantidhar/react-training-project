import React from 'react';
import { Button,TextField } from "@material-ui/core";

const SignUp = () =>{
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
        />
        <TextField
        name="email"
        variant="outlined"
        required
        fullWidth
        id="email"
        label="email"
        autoFocus
        />
        <TextField
        name="password"
        variant="outlined"
        required
        fullWidth
        id="password"
        label="password"
        autoFocus
        />
        <Button color='primary'>Sign Up</Button>
    </form>
    )
    
}
export default SignUp;