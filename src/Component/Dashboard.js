import React from "react";
import { Container, Typography} from "@material-ui/core";
import Heading from "./Heading";
import HouseList from "./HouseList";
import MyHouseList  from "./MyHouseList";
import { getHouseListType } from '../Redux/selectors';
import { connect } from 'react-redux';

const mapStateToProps = (state) =>{
    const listType = getHouseListType(state);
    return {listType}
}
const Dashboard = (props) =>{
    return(
        <>
        <Typography>
        <Heading />
        <Container maxWidth='sm'>
            {props.listType === 'allHouses'?<HouseList/>:<MyHouseList/>}  
        </Container>
        </Typography>
        
        </>
    )
}

export default connect(mapStateToProps)(Dashboard);