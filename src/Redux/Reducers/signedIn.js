import { SIGNIN, SIGNOUT } from '../actionTypes';
const initialState = {
    signedIn : false,
    email : null,
    id : null
}

export default function(state = initialState, action){
    switch (action.type){
        case SIGNIN:
            let {email, id} = action.payload;
            return {
                ...state,
                signedIn: true,
                email:email,
                id:id
            }
        case SIGNOUT:
            return {
                ...state,
                signedIn: false,
                email: null,
                id: null
            }
        default:
            return state;
    }
}