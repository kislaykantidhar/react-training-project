import React, { useState } from 'react';
import { Button,TextField } from "@material-ui/core";
import { signIn } from '../Redux/actions';
import { connect } from 'react-redux';
import {signInController,getCurrentUser} from '../Controllers/authController'
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
        signInController(email,password)
        .then(user=>{
            props.signInUser(getCurrentUser().email,getCurrentUser().uid);
        })
        .catch(error =>{
            alert(error);
        })
        
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