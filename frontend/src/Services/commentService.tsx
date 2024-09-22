import axios from "axios";
import { ICommentGet, ICommentPost } from "../Models/Comment";
import { handleError } from "../Helpers/HandleError";

const api = "http://localhost:5200/api/";

export const postCommentAPI = async (
  title: string,
  content: string,
  symbol: string
) => {
  try {
    const data = await axios.post<ICommentPost>(api + `comment/${symbol}`, {
      title: title,
      content: content,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const getCommentAPI = async (symbol: string) => {
  try {
    const data = await axios.get<ICommentGet[]>(api + `comment/?Symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};
