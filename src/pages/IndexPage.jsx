import React, { useEffect, useState } from "react";
import "../css/IndexPage.css";
import Navbar from "../components/Navbar";
import Cookies from "universal-cookie";
import { Toaster, toast } from "react-hot-toast";
import { useUserStore } from "../store/UserStore";
import { useUrlStore } from "../store/UrlStore";
import copy from "copy-to-clipboard";

const cookies = new Cookies();
const token = cookies.get("TOKEN");

function IndexPage() {
  const [linkInput, setlinkInput] = useState("");

  const fetchUserData = useUserStore((state) => state.userData);
  const user = useUserStore((state) => state.user);
  const fetchUrl = useUrlStore((state) => state.url);
  const outputUrl = useUrlStore((state) => state.outputUrl);

  const handleShorten = function (event) {
    event.preventDefault();
    fetchUrl(linkInput);
  };

  const handlecopy = function () {
    copy(`${window.location.hostname}/${outputUrl?.shortUrl}`);
    toast.success("Copied to Clipboard! 📋");
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="index__page">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Navbar />
      <div className="index__contents">
        {user ? (
          <h2 className="index__user">
            Welcome back{" "}
            <span className="user__name">
              {user?.firstName} {user?.lastName}{" "}
            </span>
            👋
          </h2>
        ) : (
          <h2 className="index__user">Hello! 🙏</h2>
        )}
        <h1>Let's Get Started. Shorten URLs Now </h1>
        <div className="index__input">
          <form action="">
            <input
              className="index__input__field"
              type="text"
              placeholder="Shorten your link"
              value={linkInput}
              onChange={(e) => setlinkInput(e.target.value)}
            />
            <button className="urls__button" onClick={handleShorten}>
              SHORTEN
            </button>
          </form>
        </div>
        {outputUrl && (
          <div className="index__output">
            <p className="index__output__field">
              {window.location.hostname}/{outputUrl?.shortUrl}
            </p>
            <button className="logout__button" onClick={handlecopy}>
              Copy Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default IndexPage;
