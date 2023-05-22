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

      <div className="urls__page__content">
        <div>
          <h2>Long Urls</h2>
          <h2>Short Urls</h2>
          <h2>Actions</h2>
        </div>

        <div>
          {allUrls?.allUrls.map((it) => (
            <UrlsContainer url={it} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UrlsPage;
