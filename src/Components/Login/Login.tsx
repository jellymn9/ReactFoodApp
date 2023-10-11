import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import * as A from "../../store/auth/auth.actions";
import Input from "../UI/Input";
import { LoginWrapper } from "./Login.styled";
import { getUsers } from "../../services/login.service";

function Login() {
  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async function () {
    if (usernameInput.current) {
      const user = await getUsers(
        usernameInput.current?.value,
        passwordInput.current?.value
      );
      if (user) {
        console.log("user res: ", user.token);
        dispatch(A.login(user.token));
        //addTokenToLocalStorage(user.token);
        navigate("/");
      }
    }
  };

  return (
    <LoginWrapper>
      <h1>Login page</h1>
      <Input
        label="username"
        input={{
          id: "username_input",
          type: "text",
          min: "3",
          max: "13",
          defaultValue: "",
        }}
        ref={usernameInput}
      />
      <Input
        label="password"
        input={{
          id: "password_input",
          type: "text",
          min: "5",
          max: "13",
          defaultValue: "",
        }}
        ref={passwordInput}
      />
      <button onClick={handleSubmit}>Submit</button>
    </LoginWrapper>
  );
}

export default Login;
