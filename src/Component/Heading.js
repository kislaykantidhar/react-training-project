import React from "react";
import { Link, Typography } from "@material-ui/core";
import { connect } from 'react-redux';
import { toggleListToAllHouses , toggleListToMyHouses} from '../Redux/actions';


const mapDispatchToProps =(dispatch)=> ({
    changeListTypeToAll : ()=>dispatch(toggleListToAllHouses()),
    changeListTypeToMy: ()=>dispatch(toggleListToMyHouses())   
})


const Heading = (props)=>{
    return (
        <Typography>
            <Link href="#" onClick={(event)=>{
                event.preventDefault();
                props.changeListTypeToAll();
            }}>
            All houses
            </Link>
            <Link href="#" onClick={(event)=>{
                event.preventDefault();
                props.changeListTypeToMy();
            }}>
            My property List
            </Link>
        </Typography>
        
    )
}

export default connect(null,mapDispatchToProps)(Heading);