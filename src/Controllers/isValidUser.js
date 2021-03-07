import {users} from '../FakeDb/Users';
export const isValidUser =(email,password) =>{
    if (users[email] && users[email].password===password) return true;
    return false;
}