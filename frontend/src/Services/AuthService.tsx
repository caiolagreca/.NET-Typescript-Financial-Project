import { handleError } from "../Helpers/HandleError";
import axios from "axios";
import { IUserProfileToken } from "../Models/User";

const api = "http://localhos:5200/api";

export const loginAPI = async (username: string, password: string) => {
  try {
    const data = await axios.post<IUserProfileToken>(api + "account/login", {
      username: username,
      password: password,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (
  username: string,
  password: string,
  email: string
) => {
  try {
    const data = await axios.post<IUserProfileToken>(api + "account/register", {
      username: username,
      password: password,
      email: email,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
