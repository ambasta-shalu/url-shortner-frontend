import React from "react";
import "../css/UrlsContainer.css";
import { AiFillDelete } from "react-icons/ai";
import { RxClipboardCopy } from "react-icons/rx";

function UrlsContainer(props) {
  const { url } = props;

  return (
    <div key={url._id} className="urls__container">
      <div>{url.longUrl}</div>
      <div>
        {window.location.hostname}/{url.shortUrl}
      </div>
      <div className="urls__c__actions">
        <AiFillDelete className="action__del" />
        <RxClipboardCopy className="action__copy" />
      </div>
    </div>
  );
}

export default UrlsContainer;
