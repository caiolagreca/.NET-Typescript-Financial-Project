/* Funcoes de login e registro do User que integram com a API do backend.
Devem fazer chamadas HTTP e tratar erros.
Steps Funcoes:
1. Funcao recebe os parametros adequados para funcao (login ou register)
2. Axios para ENVIAR solicitacoes HTTP para a rota especifica da API
3. Retorna os dados da resposta
4. Em caso de erro, use funcao criada para manipular os Errors.
*/

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
    const data = await axios.post<IUserProfileToken>(api + "account/re", {
      username: username,
      password: password,
      email: email,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};