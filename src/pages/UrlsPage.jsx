import React, { useEffect, useState } from "react";
import "../css/UrlsPage.css";
import UrlsContainer from "../components/UrlsContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useUrlStore } from "../store/UrlStore";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

function UrlsPage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const fetchAllUrls = useUrlStore((state) => state.fetchAllUrls);
  const allUrls = useUrlStore((state) => state.allUrls);
  const deletedUrlCount = useUrlStore((state) => state.deletedUrlCount);

  const fetchAllUrlsHelper = async function () {
    setIsLoading(true);
    await fetchAllUrls();
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllUrlsHelper();
  }, [deletedUrlCount]);

  const handleHome = function () {
    navigate("/");
  };

  return (
    <div className="urls__page">
      <div className="shape"></div>
      {/* <div className="shape"></div> */}
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <Navbar btnName="Home" btnFun={handleHome} />

      {isLoading ? (
        <div className="pacman__loader">
          <PacmanLoader
            color="#6495ed"
            loading={isLoading}
            margin={2}
            size={20}
            speedMultiplier={1}
          />
          <p>Fetching URLs . . .</p>
        </div>
      ) : allUrls?.allUrls.length ? (
        <div className="urls__page__content">
          <div className="urls__page__header">
            <h2 className="hide">Long Url</h2>
            <h2>Short Url</h2>
            <h2>Action</h2>
            <h2>View</h2>
          </div>

          <div>
            {allUrls?.allUrls.map((it) => (
              <UrlsContainer key={it._id} url={it} />
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
