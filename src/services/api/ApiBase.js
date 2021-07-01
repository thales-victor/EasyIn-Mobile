import React from "react";
import axios from "axios";
import { View } from "react-native";
import { HttpStatus } from "../HttpStatus";
import { useAuth } from "../../hooks/auth";
import toast from "../../components/Alert";

const axiosInstance = axios.create({
  baseURL: "http://192.168.0.21:5000/",
  // baseURL: "http://192.168.0.21/EasyIn-Back/",
  timeout: 30000
});

let user = null;
let logout = null;
let shouldUseToken = true;

export const setupInterceptors = (_user, _logout) => {
  user = _user;
  logout = _logout;
};

axiosInstance.interceptors.request.use(
  request => requestHandler(request)
);

axiosInstance.interceptors.response.use(
  response => onFulfilled(response),
  error => onRejected(error)
);


export const ApiBaseComponent = () => {
  const { user, logout } = useAuth();
  setupInterceptors(user, logout);
  return <View />;
};

const requestHandler = (request) => {
  console.log(user)
  if (shouldUseToken) {
    if (user) {
      request.headers.Authorization = "Bearer " + user.token;
    }
  }
  request.headers["Content-Type"] = "application/json";
  request.headers["Access-Control-Allow-Origin"] = "*";
  return request;
};


const onFulfilled = (response) => {
  return response;
};

const onRejected = (error) => {
  const status = error?.response?.status;
  
  console.log(error);
  if (status === HttpStatus.UNAUTHORIZED) {
    logout();
  } else {
    let errorMessage = error?.response?.data?.message;
    if (errorMessage == null) {
      errorMessage = JSON.stringify(error.response);
    }
    toast.error(errorMessage);
  }
  return error.response;
};


export async function get(endPoint, params, timeout) {
  let result = await axiosInstance.get(
    endPoint,
    { params: params, timeout }
  );
  let response = {
    data: result?.data,
    status: result?.status
  };
  return response;
}

export async function post(endPoint, postObject) {
  let result = await axiosInstance.post(
    endPoint,
    postObject
  );
  let response = {
    data: result?.data,
    status: result?.status
  };
  return response;
}

export async function put(endPoint, postObject) {
  let result = await axiosInstance.put(endPoint, postObject)
  let response = { data: result?.data, status: result?.status }
  return (response)
}

export async function remove(endPoint, params) {
  let result = await axiosInstance.delete(endPoint, { params: params })
  let response = { data: result?.data, status: result?.status }
  return (response)
}

export async function postAnonymous(endPoint, postObject) {
  shouldUseToken = false;
  var response = post(endPoint, postObject);
  shouldUseToken = true;
  return response;
}