import {
    GET_USERS_REQ,
    GET_USERS_RES
} from '../constants/index';
import usersData from './users.json';

const usersInitialState = {
    loaded: false,
    data: usersData,
}

const reducer = (state = usersInitialState, action) => {
    switch(action.type) {
        case GET_USERS_REQ:
            return {
                ...state,
                loaded: false
            }
        case GET_USERS_RES:
            return {
                ...state,
                loaded: true,
                data: action.payload
            }
    default:
        return state;
    }
}
export default reducer