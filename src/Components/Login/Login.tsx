import Input from "../UI/Input";
import { LoginWrapper } from "./Login.styled";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../services/login.service";
import { useRef } from "react";

function Login() {
  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = async function () {
    if (usernameInput.current) {
      const user = await getUsers(usernameInput.current?.value);
      if (user) {
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
