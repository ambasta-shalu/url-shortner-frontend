import React from "react";
import "../css/UrlsContainer.css";
import { AiFillDelete } from "react-icons/ai";
import { RxClipboardCopy } from "react-icons/rx";
import { Toaster, toast } from "react-hot-toast";

function UrlsContainer(props) {
  const { url } = props;

  const truncate = function (string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div key={url._id} className="urls__container">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="urls">{truncate(url.longUrl, 25)}</div>
      <div className="urls">
        {window.location.hostname}/{url.shortUrl}
      </div>
      <div className="urls__c__actions">
        <AiFillDelete className="action" title="Delete" />
        <RxClipboardCopy className="action" title="Copy" />
      </div>
    </div>
  );
}

export default UrlsContainer;
