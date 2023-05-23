import React from "react";
import "../css/UrlsContainer.css";
import { AiFillDelete } from "react-icons/ai";
import { RxClipboardCopy } from "react-icons/rx";
import { Toaster, toast } from "react-hot-toast";
import copy from "copy-to-clipboard";

function UrlsContainer(props) {
  const { url } = props;

  const truncate = function (string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  const handleShortUrlCopy = function () {
    copy(`${window.location.hostname}/${url?.shortUrl}`);
    toast.success("Short URL Copied to Clipboard! 📋");
  };

  const handleLongUrlCopy = function () {
    copy(`${url?.longUrl}`);
    toast.success("Long URL Copied to Clipboard! 📋");
  };

  const handleDelete = function () {
    toast.success("delete testing 🦜");
  };

  return (
    <div key={url._id} className="urls__container">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="urls" onClick={handleLongUrlCopy}>
        {truncate(url.longUrl, 25)}
      </div>

      <div className="urls" onClick={handleShortUrlCopy}>
        {window.location.hostname}/{url.shortUrl}
      </div>

      <div className="urls__c__actions">
        <AiFillDelete
          className="action"
          title="Delete"
          onClick={handleDelete}
        />
        <RxClipboardCopy
          className="action"
          title="Copy"
          onClick={handleShortUrlCopy}
        />
      </div>
    </div>
  );
}

export default UrlsContainer;
