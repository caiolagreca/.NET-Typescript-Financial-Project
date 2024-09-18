/* 
Criamos o Context de autenticacao para gerenciar o estado do User, Token e fornecer funcoes para register, login e logout:

- Crie uma interface para os valores do Context (User, Token, registerUser, loginUser, logout, isLoggedIn)

- Define o tipo da Props que eh um objeto com propriedade children do tipo React.ReactNode
OBS1: React.ReactNode é um tipo especial no React que representa qualquer coisa que possa ser renderizada no React. Isso inclui elementos JSX, strings, números, arrays e até mesmo null ou undefined.
OBS2: Esse tipo eh usado em componentes que encapsulam outros componentes. No caso o UserProvider precisar aceitar filhos (encapsula o App com o Context).

- Criamos o context via "createContext" para compartilhar os dados entre componentes sem precisar usar Props.
OBS1: Lembre-se de passar seu Tipo/Interface.
OBS2: createContext recebe como parametro um obj vazio temporariamente pois estamos inicializando o contexto e nao temos dados reais ainda. Passe o tipo/interface para que o TS interprete esse obj de acordo com seu respectivo tipo ("obj as Tipo/Interface").

- Crie o Componente UserProvider no qual recebe o children como Props

- useState par armazenar os estados do User, Token e isReady (para saber quando os States estiverem prontos).

- useEffect para carregar o User e Token do localStorage quando o componente for montado;
Caso exista o user e token, envia esses dados para seus States (lembre-se que User eh um Obj);
Quando token for carregado, defina o Header padrao de autorizacao do Axios para que todas as Requests incluam o token;
Altere o estados do isReady como True para saber que deu certo e os estados foram concluidos.

- Funcoes loginUser e registerUser:
1. Recebem como parametro os dados de acordo com sua logica de negocio.
2. Chama sua respectiva funcao do Service via async/await, que tambem tem parametros.
3. Caso tenha uma resposta atraves do .then(), insere o token no localStorage.
OBS: No localStorage, cada item é salvo como um par chave-valor.
4. Cria um objeto userObj para armazenar os dados do Usuario.
5. Insere esse objeto no localStorage.
OBS: como é um objeto JS, precisa convertê-lo em uma string antes de armazenar
6. Insere o token e userObj nos respectivos States.
7. Envia mensagem de sucesso via Toast.
8. Redireciona User para pagina ("/search") via navigate.
9. Caso dê erro no recebimento da resposta inicialmente, o catch envia uma mensagem de erro pelo Toast.

- Funcao isLoggedIn:
retorna True se existir um State "user"

- Funcao loggout:
1. Remove token e user do localStorage.
2. remove os dados do useState do user e token.
3. Redireciona User para pagina ("/") via navigate.

- Retorno do Componente:
1. UserContext.Provider passa todas as funcoes e valores utilizadas pelo atributo value
2. Ceritifique-se de que o so ira renderizar o Children quando os States estiverem prontos (utiliza o estado isReady como True para isso).

- Criamos um Custom Hook:
Eh uma função personalizada que encapsula o useContext para facilitar o acesso ao UserContext.
Utiliza o UserContext para acessar os dados armazenados no Context.
Faz com que nao seja preciso chamar o useContext(UserContext) em cada componente.



*/

import React, { createContext, useEffect, useState } from "react";
import { UserProfile } from "../Models/User";
import { useNavigate } from "react-router";
import { loginAPI, registerAPI } from "../Services/AuthService";
import { toast } from "react-toastify";
import axios from "axios";

interface IUserContext {
  user: UserProfile | null;
  token: string | null;
  registerUser: (username: string, password: string, email: string) => void;
  loginUser: (username: string, password: string) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
}

type Props = { children: React.ReactNode };

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (
    email: string,
    password: string,
    userName: string
  ) => {
    await registerAPI(email, password, userName)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res?.data.token);
          const userObj = {
            userName: res?.data.userName,
            email: res?.data.email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res?.data.token!);
          setUser(userObj);
          toast.success("Login Success!");
          navigate("/search");
        }
      })
      .catch((e) => toast.warning("Server error occurred"));
  };

  const loginUser = async (username: string, password: string) => {
    await loginAPI(username, password)
      .then((res) => {
        if (res) {
          localStorage.setItem("token", res?.data.token);
          const userObj = {
            userName: res?.data.userName,
            email: res?.data.email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res?.data.token!);
          setUser(userObj);
          toast.success("Login Success!");
          navigate("/search");
        }
      })
      .catch((e) => toast.warning("Server error occurred"));
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{ loginUser, registerUser, isLoggedIn, logout, token, user }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
