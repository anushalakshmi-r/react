import React from "react";
import { createRoot } from "react-dom/client";
import { AuthProvider } from "./AuthContext";
import LoginButton from "./LoginButton";

const root = createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <LoginButton />
  </AuthProvider>
);