import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Components/Layout";
import SignInSide from "../Pages/SignIn";
import Register from "../Pages/Register";
import Users from "../Pages/Users";
import Chat from "../Pages/Chat";
import Support from "../Pages/Support";
import Called from "../Pages/Called";
import { AuthContext } from "../Contexts/Auth";
import SLA from "../Pages/SLA";

const InterceptorRoutes = ({ children }: { children: JSX.Element }) => {
  
  const { user } = useContext(AuthContext)

    if (!user) return <SignInSide/>;
  
  return children;
};

const RoutesApp: React.FC = () => {
  return (
    <Routes>
      <Route path="*" />
      <Route path="/register-user" element={<Register/>}/>
      <Route
        path="/"
        element={
          <InterceptorRoutes>
            <Layout>
              <Home />
            </Layout>
          </InterceptorRoutes>
        }
      />
      <Route
        path="/usuarios"
        element={
          <InterceptorRoutes>
            <Layout>
              <Users />
            </Layout>
          </InterceptorRoutes>
        }
      />
      <Route
        path="/chat"
        element={
          <InterceptorRoutes>
            <Layout>
              <Chat />
            </Layout>
          </InterceptorRoutes>
        }
      />
      <Route
        path="/chamados"
        element={
          <InterceptorRoutes>
            <Layout>
              <Called />
            </Layout>
          </InterceptorRoutes>
        }
      />
      <Route
        path="/support"
        element={
          <InterceptorRoutes>
            <Layout>
              <Support />
            </Layout>
          </InterceptorRoutes>
        }
      />
      <Route
        path="/sla"
        element={
          <InterceptorRoutes>
            <Layout>
              <SLA />
            </Layout>
          </InterceptorRoutes>
        }
      />
    </Routes>
  );
};

export default RoutesApp;
