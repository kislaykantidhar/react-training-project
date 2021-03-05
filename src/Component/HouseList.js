import React from 'react'; 
import getHouseList from "../Controllers/getHouseList";

const HouseList = (props) =>{
    const houseList = getHouseList();
    const houseListformat = [];
    houseList.forEach(element=>{
        houseListformat.push(
            <li key={element.houseId}>
                name:{element.name}
                address:{element.address}
                rent:{element.rent}
            </li>
        )
    })
    return(<ul>{houseListformat}</ul>)
}

export default HouseList;