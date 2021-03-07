import React, { useState } from 'react';
import { Button,TextField } from "@material-ui/core";
import { isValidUser } from '../Controllers/isValidUser';
import { signIn } from '../Redux/actions';
import { connect } from 'react-redux';
// const mapDispatchToProps =(dispatch)=> ({
//     changeListTypeToAll : ()=>dispatch(toggleListToAllHouses()),
//     changeListTypeToMy: ()=>dispatch(toggleListToMyHouses())   
// })
const mapDispatchToProps = (dispatch) => ({
    signInUser : (email, password)=>dispatch(signIn(email,password))
})
const SignIn = (props) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const signInOperation =() =>{
        if(isValidUser(email,password))
        {
            props.signInUser(email,password);
        }
        else
        {
            setEmail('');
            setPassword('');
            alert('Either your email or password is invalid');
            
        }
    }
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
        onChange={(event)=>{
            event.preventDefault();
            setEmail(event.target.value);
        }}
        value={email}
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
        onChange={(event)=>{
            event.preventDefault();
            setPassword(event.target.value);
        }}
        value={password}
        />
        <Button color='primary' onClick={signInOperation}>Sign In</Button>
    </form>
    )
    
}
export default connect(null,mapDispatchToProps)( SignIn);