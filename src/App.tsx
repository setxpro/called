import GlobalStyle from "./Styles/GlobalStyle";
import RoutesApp from './Routes';
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
    <ToastContainer/>
      <GlobalStyle/>
      <RoutesApp/>
    </>
    
  );
}

export default App;