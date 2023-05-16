import React, { useEffect } from "react";
import "../css/IndexPage.css";
import Navbar from "../components/Navbar";
import Cookies from "universal-cookie";
import { useUserStore } from "../store/UserStore";
import { useAuthStore } from "../store/AuthStore";

const cookies = new Cookies();
const token = cookies.get("TOKEN");

function IndexPage() {
  const fetchUserData = useUserStore((state) => state.userData);
  const user = useUserStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="index__page">
      <Navbar />
      <button className="logout__button" type="submit" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
}

export default IndexPage;
