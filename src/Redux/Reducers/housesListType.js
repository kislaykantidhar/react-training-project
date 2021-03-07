import { TOGGLE_LIST_TO_ALL_HOUSES ,TOGGLE_LIST_TO_MY_HOUSES } from "../actionTypes";

const initialState = {
    listType : 'allHouses'
}

export default function(state = initialState , action) {
    switch (action.type) {
        case TOGGLE_LIST_TO_ALL_HOUSES :
            let list= action.payload.list;
            return {
                ...state,
                listType : list
            }
        case TOGGLE_LIST_TO_MY_HOUSES :
            let myList = action.payload.list;
            return {
                ...state,
                listType : myList
            }
        default:
            return state ;
    }
}