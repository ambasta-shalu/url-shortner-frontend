import React, { useEffect } from "react";
import "../css/UrlsPage.css";
import { useUrlStore } from "../store/UrlStore";
import { Toaster, toast } from "react-hot-toast";
import UrlsContainer from "../components/UrlsContainer";

function UrlsPage() {
  const fetchAllUrls = useUrlStore((state) => state.fetchAllUrls);
  const allUrls = useUrlStore((state) => state.allUrls);

  useEffect(() => {
    fetchAllUrls();
  }, []);

  return (
    <div className="urls__page">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

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
        <h1 className="urls__page__msg">You have no URLs 😷</h1>
      )}
    </div>
  );
}

export default UrlsPage;
