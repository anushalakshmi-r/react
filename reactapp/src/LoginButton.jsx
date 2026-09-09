import { useContext } from "react";
import AuthContext from "./AuthContext";

function LoginButton() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <button
      onClick={() =>
        user
          ? logout()
          : login({ name: "John Doe", email: "john@example.com" })
      }
    >
      {user ? "Logout" : "Login"}
    </button>
  );
}

export default LoginButton;