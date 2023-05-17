import React, { useEffect } from "react";
import "../css/IndexPage.css";
import Navbar from "../components/Navbar";
import Cookies from "universal-cookie";
import { useUserStore } from "../store/UserStore";

const cookies = new Cookies();
const token = cookies.get("TOKEN");

function IndexPage() {
  const fetchUserData = useUserStore((state) => state.userData);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="index__page">
      <Navbar />
      <div className="index__contents">
        {user ? (
          <h2 className="index__user">
            Welcome back{" "}
            <span className="user__name">
              {user?.firstName} {user?.lastName}{" "}
            </span>
            🙏
          </h2>
        ) : (
          <h2 className="index__user">Hello! 👋</h2>
        )}
        <h1>Let's Get Started. Shorten URLs Now </h1>
        <div className="index__input">
          <form action="">
            <input
              className="index__input__field"
              type="text"
              placeholder="Shorten your link"
            />
            <button className="signup__button shorten__button">SHORTEN</button>
          </form>
        </div>
        <div className="index__output">
          <p className="index__output__field"></p>
          <button className="logout__button copy__button">Copy Link</button>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
