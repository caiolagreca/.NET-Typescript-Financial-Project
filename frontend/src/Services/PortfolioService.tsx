import axios from "axios";
import { IPortfolioGet, IPortfolioPost } from "../Models/Portfolio";
import { handleError } from "../Helpers/HandleError";

const api = "http://localhost:5200/api/portfolio";

export const getPortfolioAPI = async () => {
  try {
    const data = await axios.get<IPortfolioGet[]>(api);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const postPortfolioAPI = async (symbol: string) => {
  try {
    const data = await axios.post<IPortfolioPost>(api + `?symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const deletePortfolioAPI = async (symbol: string) => {
  try {
    const data = await axios.delete<IPortfolioPost>(api + `?symbol=${symbol}`);
    return data;
  } catch (error) {
    handleError(error);
  }
};
