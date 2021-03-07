import React from "react";
import {  Typography, AppBar, Tabs, Tab, Box, Link} from "@material-ui/core";
import HouseList from "./HouseList";
import MyHouseList  from "./MyHouseList";
import SignIn from "./SignIn";
import { getSignIninfo } from '../Redux/selectors';
import { connect } from 'react-redux';
import { signOut } from "../Redux/actions";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}



function a11yProps(index) {
return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
};
}
const mapStateToProps = (state) =>{
    const signInInfo = getSignIninfo(state);
    return {signInInfo};
}
const mapDispatchToProps = (dispatch) =>({
  signout : ()=>dispatch(signOut())
})
const Dashboard = (props) =>{
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <>
        <Typography>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="All property" {...a11yProps(0)}  />
                    {props.signInInfo.signedIn?<Tab label="My Property" {...a11yProps(1)}  />:null}
                    {!(props.signInInfo.signedIn)?<Tab label="Sign In"  {...a11yProps(1)} />: null}
                     
                </Tabs>
                
            </AppBar>
            {props.signInInfo.signedIn?<Link href="#" onClick={(event)=>{
              event.preventDefault();
              props.signout();
            }}>Sign Out</Link>:null}
            <TabPanel value={value} index={0}>
            <HouseList/>
            </TabPanel>
            {props.signInInfo.signedIn?<TabPanel  value={value} index={1}>
            <MyHouseList/>
            </TabPanel>:null}
            {!(props.signInInfo.signedIn)?<TabPanel value={value} index={1}>
                <SignIn/>
            </TabPanel>:null}
        </Typography>
        
        </>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);