import React, { useEffect, useState } from "react";
import "../css/UrlsPage.css";
import { useUrlStore } from "../store/UrlStore";
import { Toaster, toast } from "react-hot-toast";

function UrlsPage() {
  const fetchAllUrls = useUrlStore((state) => state.fetchAllUrls);
  const allUrls = useUrlStore((state) => state.allUrls);

  useEffect(() => {
    fetchAllUrls();
  }, []);

  return (
    <div className="url__page">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div>
        {allUrls?.urls.map((url) => (
          <p key={url._id}>{url.shortUrl}</p>
        ))}
      </div>
    </div>
  );
}

export default UrlsPage;
