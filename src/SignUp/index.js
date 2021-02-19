import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { createOrganization } from "../api";
import { useAuthContext } from "../Auth";
import SignUpPresenter from "./SignUpPresenter";

export default function SignUp() {
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useAuthContext();
  const history = useHistory();

  const onSubmit = async () => {
    await createOrganization(organizationName, email, password);
    await authContext.authenticate();
    history.push("/");
  }

  const props = { organizationName, setOrganizationName, email, setEmail, password, setPassword, onSubmit };
  return (<SignUpPresenter {...props} />)
}