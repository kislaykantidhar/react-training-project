import React from 'react';
import getMyHouseList from "../Controllers/getMyHouseList"

const MyHouseList = (props) =>{
    const myHouseList = getMyHouseList();
    const myHouseListformat = [];
    myHouseList.forEach(element=>{
        myHouseListformat.push(
            <li key={element.houseId}>
                name:{element.name}
                address:{element.address}
                rent:{element.rent}
            </li>
        )
    })
    return(<ul>{myHouseListformat}</ul>)
}

export default MyHouseList;