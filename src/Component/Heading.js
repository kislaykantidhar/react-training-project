import React from "react";
import { Link, Typography } from "@material-ui/core";

const Links = (props) =>{
    return (
        <Typography>
            <Link href="#" onClick={(event)=>{
                event.preventDefault();
                props.changeListType('allHouses');
            }}>
            All houses
            </Link>
            <Link href="#" onClick={(event)=>{
                event.preventDefault();
                props.changeListType('myHouses');
            }}>
            My property List
            </Link>
        </Typography>
        
    )
}
const Heading = (props)=>{
    return(
        <>
            Here will go the heading
            <Links changeListType={props.setTypeOfHouseList}/>
        </>
        
    )
}

export default Heading;