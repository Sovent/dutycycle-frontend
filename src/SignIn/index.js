import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { signIn } from "../api";
import { useAuthContext } from "../Auth";
import SignInPresenter from "./SignInPresenter";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useAuthContext();
  const history = useHistory();

  const onSubmit = async () => {
    await signIn(email, password);
    await authContext.authenticate();
    history.push("/");
  }

  const props = { email, setEmail, password, setPassword, onSubmit };
  return (<SignInPresenter {...props} />)
}