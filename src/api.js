import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_API_URL ?? "http://localhost:5000";

const instance = axios.create({
  baseURL: apiBaseUrl
});

export const createOrganization = (organizationName, adminEmail, adminPassword) =>
  instance
  .post("organizations", { Name: organizationName, AdminCredentials: { Email: adminEmail, Password: adminPassword } })
  .then(response => response.data);