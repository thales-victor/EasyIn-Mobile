import { post } from "../ApiBase";
import { HttpStatus } from "../../HttpStatus";

export async function Login(username, password) {
  var params = {
    username: username,
    password: password
  };
  let result = await post("api/login", params);
  if (result.status === HttpStatus.OK) {
    return result.data
  }
}

export async function Register(name, email, password, confirmPassword) {
  var params = {
    username: name,
    email: email,
    password: password,
    confirmPassword: confirmPassword
  };
  let result = await post("api/user", params);
  return result.status === HttpStatus.CREATED;
}