import { SIGNIN, SIGNOUT} from './actionTypes';

export const signIn = (email,id) => ({
    type: SIGNIN,
    payload: {
        email ,
        id
    }
})
export const signOut = () => ({
    type: SIGNOUT
})