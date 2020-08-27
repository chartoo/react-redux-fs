import {
    GET_USER_LIST,
    GET_USER_SUCCESS,
    GET_USER_FAIL
} from '../users/type';

const getUserList=()=>{
    return {
        type:GET_USER_LIST
    }
}
const getuserSuccess=users=>{
    return {
        type:GET_USER_SUCCESS,
        payload:users
    }
}
const getUserFail=error=>{
    return {
        type:GET_USER_FAIL,
        payload:error
    }
}

export {getUserList,getuserSuccess,getUserFail}