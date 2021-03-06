import React from 'react';
import { useContext, useEffect, useState, createContext } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { getCurrentOrganization } from "./api";
import Preloader from './Preloader';

const authContext = createContext();

export function useAuthContext() {
  return useContext(authContext);
}

function useAuthContextSetup() {
  const [organization, setOrganization] = useState(null);
  const [isAuthenticationInProcess, setIsAuthenticationInProcess] = useState(true);
  const history = useHistory();

  const authenticate = async () => {
    setIsAuthenticationInProcess(true);
    const organizationData = await getCurrentOrganization(() => history.push("/signin"));
    if (!!organizationData) {
      setOrganization(organizationData);
    }
    setIsAuthenticationInProcess(false);
  }

  return {
    organization,
    authenticate,
    isAuthenticationInProcess
  };
}

export function PrivateRoute({ children, ...rest }) {
  const { organization, authenticate } = useAuthContext();
  if (!organization) {
    authenticate();
    return (<Preloader />)
  }
  return (<Route {...rest}>{children}</Route>)
};

export function WithAuthentication({ children }) {
  const authContextValue = useAuthContextSetup();
  return (
    <authContext.Provider value={authContextValue}>
      {children}
    </authContext.Provider>
  );
};