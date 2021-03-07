import {TOGGLE_LIST_TO_ALL_HOUSES, TOGGLE_LIST_TO_MY_HOUSES} from './actionTypes';

export const toggleListToAllHouses = () => ({
    type: TOGGLE_LIST_TO_ALL_HOUSES,
    payload: {
        list: 'allHouses'
    }
})

export const toggleListToMyHouses = () => ({
    type: TOGGLE_LIST_TO_MY_HOUSES,
    payload: {
        list: 'myHouses'
    }
})