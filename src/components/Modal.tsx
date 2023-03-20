import React from "react";

const Modal = ({
  onDelete,
  anchor,
  title,
  content,
}: {
  onDelete: () => void;
  anchor: string;
  title: string;
  content: string;
}) => {
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="py-4">{content}</p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn-secondary btn-sm btn px-5">
              Cancel
            </label>
            <label
              htmlFor={anchor}
              className="btn-warning btn-sm btn px-5"
              onClick={onDelete}
            >
              Delete
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
