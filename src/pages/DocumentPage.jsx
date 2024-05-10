import React from "react";
import TextEditor from "../components/TextEditor";
import { useParams } from "react-router-dom";
import "../App.css";

const DocumentPage = () => {
  const { id: documentId } = useParams();
  function copyRoomID() {
    const noti = document.querySelector("#notifier");
    navigator.clipboard.writeText(documentId);
    noti.textContent = "Copied to clipboard";
    setTimeout(() => {
      noti.textContent = "";
    }, 2000);
  }
  return (
    <div className="document-page">
      <div className="document-tool">
        <div id="roomid">{documentId}</div>{" "}
        <button onClick={copyRoomID}>Copy RoomId</button>
      </div>
      <p
        id="notifier"
        style={{ margin: "10px 0", color: "#FCFF4B", fontSize: "14px" }}
      ></p>
      <TextEditor />
    </div>
  );
};

export default DocumentPage;
