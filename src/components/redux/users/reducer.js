import {
    GET_USER_LIST,
    GET_USER_SUCCESS,
    GET_USER_FAIL
} from '../users/type';
const initialState={
    loading:false,
    users:[],
    error:''
}

const userReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_USER_LIST:return {
            ...state,
            loading:true,
        }
        case GET_USER_SUCCESS:return {
            ...state,
            loading:false,
            users:action.payload,
        }
        case GET_USER_FAIL:return {
            ...state,
            loading:false,
            users:[],
            error:action.payload
        }
        default: return {
           ...state
        }
    }
}

export default userReducer;