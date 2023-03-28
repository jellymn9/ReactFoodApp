import Input from "../UI/Input";

import { getUsers } from "../../services/login.service";
import { useRef } from "react";

function Login() {
  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const handleSubmit = async function () {
    if (usernameInput.current) {
      const bla = await getUsers(usernameInput.current?.value);
      console.log(bla);
    }
  };

  return (
    <div>
      <h1>Login page</h1>
      <div style={{ width: "200px" }}>
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
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
