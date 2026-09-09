import { useContext } from "react";
import AuthContext from "./AuthContext";

function LoginButton() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login({ name: "John Doe" })}>Login</button>
      )}
    </div>
  );
}

export default LoginButton;