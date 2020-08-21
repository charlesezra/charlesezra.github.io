import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./modal.css";

export default function Popup({ open, setOpen }) {
  const [mdText, setMdText] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/charlesezra/Task-Manager/master/README.md"
    )
      .then((response) => {
        if (response.ok) return response.text();
        else return Promise.reject("Didn't fetch text correctly");
      })
      .then((text) => {
        setMdText(text);
      })
      .catch((error) => console.error(error));
  });

  if (open) {
    return (
      <div>
        <Modal open={open} onClose={() => setOpen(false)}>
          <ReactMarkdown source={mdText} disallowedTypes={Image} />
        </Modal>
      </div>
    );
  } else {
    return <div></div>;
  }
}
