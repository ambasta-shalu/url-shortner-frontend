import React from "react";
import "../css/UrlsContainer.css";
import { AiFillDelete } from "react-icons/ai";
import { IoIosCopy } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import copy from "copy-to-clipboard";
import { useUrlStore } from "../store/UrlStore";

function UrlsContainer(props) {
  const { url } = props;

  const delUrl = useUrlStore((state) => state.delUrl);

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
    delUrl(url._id);
  };

  return (
    <div className="urls__container">
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="urls hide" onClick={handleLongUrlCopy}>
        {truncate(url.longUrl, 20)}
      </div>

      <div className="urls" onClick={handleShortUrlCopy}>
        {url.shortUrl}
      </div>

      <div className="urls__c__actions">
        <AiFillDelete
          className="action__del"
          title="Delete"
          onClick={handleDelete}
        />
        <IoIosCopy
          className="action__copy"
          title="Copy"
          onClick={handleShortUrlCopy}
        />
      </div>

      <div className="urls__c__view">
        <span className="view__count">{url.clickCount || 0} </span>
        <FaEye className="action__view" title="View Count" />
      </div>
    </div>
  );
}

export default UrlsContainer;
