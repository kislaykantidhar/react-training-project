import React from 'react';
import { Button,TextField } from "@material-ui/core";

const SignIn = () =>{
    return(
        <form>
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
        <Button color='primary'>Sign In</Button>
    </form>
    )
    
}
export default SignIn;