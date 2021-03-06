import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_API_URL ?? "http://localhost:5000";

const instance = axios.create({
  baseURL: apiBaseUrl
});

const axiosConfig = { withCredentials: true };

export const createOrganization = (organizationName, adminEmail, adminPassword) =>
  instance
  .post("organizations", { Name: organizationName, AdminCredentials: { Email: adminEmail, Password: adminPassword } })
  .then(response => response.data);

export const getCurrentOrganization = (onUnauthorized) =>
  instance
    .get("organizations/current", axiosConfig)
    .then(response => response.data)
    .catch(error => {
      if (error.response.status === 401) {
        onUnauthorized();
      }
    });

export const signIn = (login, password) => 
  instance
  .post("users/signin", { Email: login, Password: password }, axiosConfig)
  .then(_ => ({ success: true }));