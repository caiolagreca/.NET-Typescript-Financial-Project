import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Context/useAuth";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark", // Define o tema como escuro
    primary: {
      main: "#90caf9", // Cor primária personalizada
    },
    secondary: {
      main: "#f48fb1", // Cor secundária personalizada
    },
    background: {
      default: "#121212", // Cor de fundo padrão
      paper: "#1e1e1e", // Cor de fundo dos componentes
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0bec5",
    },
  },
  shape: {
    borderRadius: 12, // Aumenta o raio das bordas para curvas mais arredondadas
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UserProvider>
          <Navbar />
          <Outlet />
          <ToastContainer />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
