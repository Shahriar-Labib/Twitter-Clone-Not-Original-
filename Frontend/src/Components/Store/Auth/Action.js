import { API_BASE_URL } from "../../Config/api";
import { FIND_TWEET_BY_ID_FAILURE } from "../Twit/ActionType";
import {
  FIND_USER_BY_ID_SUCCESS,
  FOLLOW_USER_FAILURE,
  FOLLOW_USER_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  GET_USER_PROFILE_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS
} from "./ActionType";
import axios from "axios";

export const loginUser = (loginData) => async (dispatch) => {
  try {
    console.log("loginUser - Attempting login with:", loginData);
    const { data } = await axios.post(`${API_BASE_URL}/auth/signin`, loginData);
    console.log("loginUser - Login response:", data);

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      console.log("loginUser - JWT stored in localStorage");
    }
    dispatch({ type: LOGIN_USER_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log("loginUser - error:", error);
    dispatch({ type: LOGIN_USER_FAILURE, payload: error.message });
  }
};

export const registerUser = (registerData) => async (dispatch) => {
  try {
    console.log("registerUser - Sending data to backend:", registerData);
    const { data } = await axios.post(`${API_BASE_URL}/auth/signup`, registerData);

    console.log("Signed up user ", data);
    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
    }
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.jwt });
  } catch (error) {
    console.log("error", error);
    dispatch({ type: REGISTER_USER_FAILURE, payload: error.message });
  }
};


export const getUserProfile = (jwt) => async (dispatch) => {
  try {
    console.log("getUserProfile - Making API call with jwt:", jwt);
    const { data } = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    console.log("getUserProfile - API response:", data);
    console.log("getUserProfile - API response fullName:", data.fullName);
    console.log("getUserProfile - API response email:", data.email);
    console.log("getUserProfile - API response keys:", Object.keys(data));
    dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: data });
  } catch (error) {
    console.log("getUserProfile - error:", error);
    dispatch({ type: GET_USER_PROFILE_FAILURE, payload: error.message });
  }
};


export const findUserById = (userId) => async (dispatch) => {
  try {
    console.log("getUserProfile - Making API call with jwt:", jwt);
    const { data } = await api.get(`${API_BASE_URL}/api/users/${userId}`)
     

   
    dispatch({ type: FIND_USER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    console.log("getUserProfile - error:", error);
    dispatch({ type: FIND_TWEET_BY_ID_FAILURE, payload: error.message });
  }
};


export const updateUserProfile = (reqData) => async (dispatch) => {
  try {
    console.log("getUserProfile - Making API call with jwt:", jwt);
    const { data } = await api.put(`${API_BASE_URL}/api/users/update`,reqData)
    console.log("updated user ",data)
     
    dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
  } catch (error) {
    console.log("getUserProfile - error:", error);
    dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
  }
};

export const followUserAction = (userId) => async (dispatch) => {
  try {
    console.log("getUserProfile - Making API call with jwt:", jwt);
    const { data } = await api.put(`${API_BASE_URL}/api/users/${userId}/follow`,reqData)
    console.log("updated user ",data)
     
    dispatch({ type: FOLLOW_USER_SUCCESS, payload: data });
  } catch (error) {
    console.log("getUserProfile - error:", error);
    dispatch({ type: FOLLOW_USER_FAILURE, payload: error.message });
  }
};



export const logout = () => async (dispatch) => {
  
    localStorage.removeItem("jwt");

    dispatch({type:LOGOUT,payload:null})

};
