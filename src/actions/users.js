import usersData from './../reducers/users.json'
import {
        GET_USERS_REQ,
        GET_USERS_RES,
        
} from '../constants/index';

export const getUsers = () => (dispatch) => {
    dispatch({
        type: GET_USERS_REQ,
    })
    dispatch({
            type: GET_USERS_RES,
            payload: usersData
        })
 
}


