import { useState } from "react";

import ReactMarkdown from "react-markdown";

import { type RouterOutputs } from "~/utils/api";
import Modal from "./Modal";

type Note = RouterOutputs["note"]["getAll"][0];

export const NoteCard = ({
  note,
  onDelete,
}: {
  note: Note;
  onDelete: () => void;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <>
      <Modal
        anchor="my-modal"
        title="Delete current note?"
        content="Once you delete this note, there will be no way to restore it!"
        onDelete={onDelete}
      />
      <div className="card mb-2 border border-gray-200 bg-base-100 p-1 shadow-xl">
        <div className="card-body m-0 p-1">
          <div
            className={`collapse-arrow ${
              isExpanded ? "collapse-open" : ""
            } collapse`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="collapse-title text-xl font-bold">{note.title}</div>
            <div className="collapse-content">
              <article className="prose bg-gray-100 lg:prose-xl">
                <ReactMarkdown>{note.content}</ReactMarkdown>
              </article>
            </div>
          </div>
          <div className="card-actions mx-2 flex justify-end">
            <label htmlFor="my-modal" className="btn-warning btn-xs btn px-5">
              Delete
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
