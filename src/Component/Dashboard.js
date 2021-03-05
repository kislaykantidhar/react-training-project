import React, { useState } from "react";
import { Container, Typography} from "@material-ui/core";
import Heading from "./Heading";
import HouseList from "./HouseList";
import MyHouseList  from "./MyHouseList";


const Dashboard = () =>{
    let [typeOfHouseList, setTypeOfHouseList] = useState('allHouses');
    return(
        <>
        <Typography>
        <Heading setTypeOfHouseList={setTypeOfHouseList} />
        <Container maxWidth='sm'>
            {typeOfHouseList === 'allHouses'?<HouseList/>:<MyHouseList/>}  
        </Container>
        </Typography>
        
        </>
    )
}
export default Dashboard;