import axios from "axios";
import { ICommentPost } from "../Models/Comment";
import { handleError } from "../Helpers/HandleError";

const api = "http://localhost:5200/api/";

export const commentAPI = async (
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
