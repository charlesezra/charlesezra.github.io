import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./modal.css";

const styles = {
  modal: {
    background: "whitesmoke",
    margin: "auto auto",
    border: "3px solid #900d0d",
    borderRadius: "15px",
  },
  closeButton: {
    background: "#e97171",
    outline: "none",
    border: "2px solid black",
    padding: "2px 2px",
    borderRadius: "100px",
  },
};

export default function Popup({ open, setOpen, name, setName }) {
  const [mdText, setMdText] = useState("");

  let url = "";
  if (name === "taskmanager") {
    url =
      "https://raw.githubusercontent.com/charlesezra/Task-Manager/master/README.md";
  } else if (name === "activre") {
    url =
      "https://raw.githubusercontent.com/charlesezra/activre/master/README.md";
  } else if (name === "gameoflife") {
    url =
      "https://raw.githubusercontent.com/charlesezra/Game-of-Life/master/README.md";
  } else {
    url = ""
  }

  useEffect(() => {
    fetch(url)
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
        <Modal open={open} onClose={() => setOpen(false)} styles={styles}>
          <ReactMarkdown source={mdText} disallowedTypes={Image} />
        </Modal>
      </div>
    );
  } else {
    return <div></div>;
  }
}
