import React from 'react';
import { useContext, useEffect, useState, createContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { getCurrentOrganization } from "./api";
import Preloader from './Preloader';

const authContext = createContext();

export function useAuthContext() {
  return useContext(authContext);
}

function useAuthContextSetup() {
  const [organization, setOrganization] = useState(null);
  const [isAuthenticationInProcess, setIsAuthenticationInProcess] = useState(true);

  const authenticate = async () => {
    setIsAuthenticationInProcess(true);
    const organizationData = await getCurrentOrganization();
    setOrganization(organizationData);
    setIsAuthenticationInProcess(false);
  }

  return {
    organization,
    authenticate,
    isAuthenticationInProcess
  };
}

export function PrivateRoute({ children, ...rest }) {
  let { organization } = useAuthContext();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        organization ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export function WithAuthentication({ children }) {
  const authContextValue = useAuthContextSetup();
  useEffect(() => authContextValue.authenticate(), []);
  return (
    <authContext.Provider value={authContextValue}>
      {authContextValue.isAuthenticationInProcess ? (<Preloader />) : children}
    </authContext.Provider>
  );
};