import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";
import { 
  GET_USER_FAILURE, 
  GET_USER_REQUEST, 
  GET_USER_SUCCESS, 
  LOGIN_FAILURE, 
  LOGIN_REQUEST, 
  LOGIN_SUCCESS, 
  LOGOUT, 
  REGISTER_FAILURE, 
  REGISTER_REQUEST, 
  REGISTER_SUCCESS 
} from "./ActionType";

// Action creators for register
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

// Register user
export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("user ", user);
    dispatch(registerSuccess(user.jwt));
  } catch (error) {
    console.error("Register error: ", error);
    dispatch(registerFailure(error.message));
  }
};

// Action creators for login
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

// Login user
export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    console.log("user ", user);
    dispatch(loginSuccess(user.jwt));
  } catch (error) {
    console.error("Login error: ", error);
    dispatch(loginFailure(error.message));
  }
};

// Action creators for getting user
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

// Get user
export const getUser = () => async (dispatch) => {
  const token = localStorage.getItem("jwt");
  if (!token) {
    console.error("No token found");
    dispatch(getUserFailure("No token found"));
    return;
  }

  dispatch(getUserRequest());
  try {
    const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    const user = response.data;
    console.log("user ", user);
    dispatch(getUserSuccess(user));
  } catch (error) {
    console.error("Get user error: ", error);
    dispatch(getUserFailure(error.message));
  }
};

// Logout user
export const logout = () => (dispatch) => {
  localStorage.removeItem("jwt");
  dispatch({ type: LOGOUT, payload: null });
  localStorage.clear();
};
