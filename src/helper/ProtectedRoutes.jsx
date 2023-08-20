import React from "react";
import Cookies from "universal-cookie";
import LoginPage from "../pages/LoginPage";

const cookies = new Cookies();

// ALTER COMPONENET ON THE BASIS OF TOKEN
export default function ProtectedRoutes({ child }) {
  const token = cookies.get("TOKEN");
  return token ? child : <LoginPage />;
}
