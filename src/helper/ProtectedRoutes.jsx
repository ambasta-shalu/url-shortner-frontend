import React from "react";
import Cookies from "universal-cookie";
import IndexPage from "../pages/IndexPage";

const cookies = new Cookies();

// receives component
export default function ProtectedRoutes({ child }) {
  const token = cookies.get("TOKEN");
  return token ? child : <IndexPage />;
}
