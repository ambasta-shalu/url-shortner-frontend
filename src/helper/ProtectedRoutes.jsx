import React from "react";
import Cookies from "universal-cookie";
import LoginPage from "../pages/LoginPage";

const cookies = new Cookies();

// receives component
export default function ProtectedRoutes({ child }) {
  const token = cookies.get("TOKEN");
  return token ? child : <LoginPage />;
}
