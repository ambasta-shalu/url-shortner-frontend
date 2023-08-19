import React, { useEffect } from "react";
import "../css/RedirectPage.css";
import { useUrlStore } from "../store/UrlStore";
import { useParams } from "react-router-dom";

function RedirectPage() {
  const fetchLongUrl = useUrlStore((state) => state.fetchLongUrl);
  const { code } = useParams();

  useEffect(() => {
    fetchLongUrl(code);
  }, []);

  return (
    <div className="redirect__page">
      <h1>Redirecting 🤓 . . .</h1>
    </div>
  );
}

export default RedirectPage;
