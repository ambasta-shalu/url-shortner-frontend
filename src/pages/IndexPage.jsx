import React, { useEffect, useState } from "react";
import "../css/IndexPage.css";
import Navbar from "../components/Navbar";
import { Toaster, toast } from "react-hot-toast";
import { useUserStore } from "../store/UserStore";
import { useUrlStore } from "../store/UrlStore";
import copy from "copy-to-clipboard";

function IndexPage() {
  const [linkInput, setlinkInput] = useState("");

  const fetchUserData = useUserStore((state) => state.fetchUserData);
  const userData = useUserStore((state) => state.userData);

  const fetchShortUrl = useUrlStore((state) => state.fetchShortUrl);
  const shortUrl = useUrlStore((state) => state.shortUrl);

  const handleShorten = function (event) {
    event.preventDefault();
    fetchShortUrl(linkInput);
  };

  const handlecopy = function () {
    copy(`${window.location.hostname}/${shortUrl?.shortUrl}`);
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
        {userData ? (
          <h2 className="index__user">
            Welcome back{" "}
            <span className="user__name">
              {userData?.firstName} {userData?.lastName}{" "}
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
        {shortUrl && (
          <div className="index__output">
            <p className="index__output__field">
              {window.location.hostname}/{shortUrl?.shortUrl}
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
