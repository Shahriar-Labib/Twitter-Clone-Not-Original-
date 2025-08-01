import { GET_USER_PROFILE_FAILURE, GET_USER_PROFILE_REQUEST, GET_USER_PROFILE_SUCCESS, LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGOUT, REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, UPDATE_USER_PROFILE } from "./ActionType";

const initialState={
    user:null,
    loading:false,
    error:null,
    jwt:null,

}



export const authReducer = (state=initialState, action) => {

    switch (action.type) {
        case LOGIN_USER_REQUEST:
        case REGISTER_USER_REQUEST:
        case GET_USER_PROFILE_REQUEST:
            return {...state,loading:true,error:null}
            
        case LOGIN_USER_SUCCESS:
        case REGISTER_USER_SUCCESS:
            console.log("Reducer - LOGIN_USER_SUCCESS/REGISTER_USER_SUCCESS payload:", action.payload);
            return {...state,loading:false,error:null,jwt:action.payload}

        case GET_USER_PROFILE_SUCCESS:
            console.log("Reducer - GET_USER_PROFILE_SUCCESS payload:", action.payload);
            return {...state,loading:false,error:null,user:action.payload}

        case UPDATE_USER_PROFILE:
            console.log("Reducer - UPDATE_USER_PROFILE payload:", action.payload);
            return {...state,user:action.payload}

        case LOGOUT:
            return initialState;

        case LOGIN_USER_FAILURE:
        case REGISTER_USER_FAILURE:
        case GET_USER_PROFILE_FAILURE:
            return {...state,loading:false,error:action.payload}
    
        default:
            return state;
    }

}