import React, { useEffect } from "react";
import "../css/UrlsPage.css";
import { useUrlStore } from "../store/UrlStore";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UrlsContainer from "../components/UrlsContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function UrlsPage() {
  const navigate = useNavigate();

  const fetchAllUrls = useUrlStore((state) => state.fetchAllUrls);
  const allUrls = useUrlStore((state) => state.allUrls);
  const deletedUrlCount = useUrlStore((state) => state.deletedUrlCount);

  useEffect(() => {
    fetchAllUrls();
  }, [deletedUrlCount]);

  const handleHome = function () {
    navigate("/");
  };

  return (
    <div className="urls__page">
      <div className="shape"></div>
      <div className="shape"></div>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Navbar btnName="Home" btnFun={handleHome} />

      {allUrls?.allUrls.length ? (
        <div className="urls__page__content">
          <div className="urls__page__header">
            <h2>Long Url</h2>
            <h2>Short Url</h2>
            <h2>Action</h2>
          </div>

          <div>
            {allUrls?.allUrls.map((it) => (
              <UrlsContainer url={it} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className="urls__page__msg">You have No URLs 😷</h1>
      )}
      <Footer />
    </div>
  );
}

export default UrlsPage;
