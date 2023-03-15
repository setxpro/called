import RoutesApp from './Routes';
import { ToastContainer } from "react-toastify";
import { useContext } from 'react';
import { GetThemeContext } from './Contexts/Theme';
import { ThemeProvider } from 'styled-components';

const App = () => {

  const { theme } = useContext(GetThemeContext)

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer/>
      <RoutesApp/>
    </ThemeProvider>
    
  );
}

export default App;