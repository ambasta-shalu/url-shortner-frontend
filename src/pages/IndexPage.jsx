import React, { useEffect, useState } from "react";
import "../css/IndexPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useUserStore } from "../store/UserStore";
import { useUrlStore } from "../store/UrlStore";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import copy from "copy-to-clipboard";
import ClipLoader from "react-spinners/ClipLoader";
import { TfiLink } from "react-icons/tfi";
import { BiSolidCopyAlt } from "react-icons/bi";

function IndexPage() {
  const navigate = useNavigate();

  const [linkInput, setlinkInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserData = useUserStore((state) => state.fetchUserData);
  const userData = useUserStore((state) => state.userData);

  const fetchShortUrl = useUrlStore((state) => state.fetchShortUrl);
  const shortUrl = useUrlStore((state) => state.shortUrl);

  const handleMyUrls = function () {
    navigate("/urls");
  };

  const handleShorten = async function (event) {
    event.preventDefault();
    if (linkInput.trim() !== "") {
      setIsLoading(true);
      await fetchShortUrl(linkInput);
      setIsLoading(false);
      setlinkInput("");
    }
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
      <div className="shape"></div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div>
        <Navbar btnName="My Urls" btnIcon={<TfiLink />} btnFun={handleMyUrls} />

        <div className="index__contents">
          {userData ? (
            <h2 className="index__user">
              Welcome back{" "}
              <span className="user__name nowrap">
                {userData?.firstName} {userData?.lastName}{" "}
              </span>
              👋
            </h2>
          ) : (
            <h2 className="index__user">Hello! 🙏</h2>
          )}
          <h1>Let's Get Started. Shorten URLs Now </h1>
          <div className="index__input">
            <form className="index__form">
              <input
                className="index__input__field"
                type="text"
                placeholder="Shorten your link"
                value={linkInput}
                onChange={(e) => setlinkInput(e.target.value)}
              />
              <button
                className="urls__button shorten__btn"
                onClick={handleShorten}
              >
                <ClipLoader
                  color="#e0ffff"
                  loading={isLoading}
                  size={25}
                  speedMultiplier={1}
                />
                SHORTEN
              </button>
            </form>
          </div>
          {shortUrl && (
            <div className="index__output">
              <p className="index__output__field">
                {window.location.hostname}/{shortUrl?.shortUrl}
              </p>
              <button className="urls__button" onClick={handlecopy}>
                <BiSolidCopyAlt />
                Copy
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default IndexPage;
