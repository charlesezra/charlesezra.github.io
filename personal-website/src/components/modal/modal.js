import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./modal.css";

export default function Popup({ open, setOpen }) {
  if (open) {
    return (
      <div>
        <Modal open={open} onClose={() => setOpen(false)}>
            <p>hello</p>
        </Modal>
      </div>
    );
  } else {
    return <div></div>;
  }
}
