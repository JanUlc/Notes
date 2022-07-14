import React from "react";
import { InputText } from "../Styles/InputText";
import { useNotes } from "../../hooks/useNotes";

const Note = () => {
  const { notes, activeNoteId, updateNote } = useNotes();
  const noteToView = notes.find((note) => note.id === activeNoteId);
  const handleChangeText = (e) => {
    updateNote({
      ...noteToView,
      content: e.target.value,
      lastModified: Date.now(),
    });
  };
  return (
    <>
      <InputText
        value={noteToView?.content || ""}
        onChange={handleChangeText}
      />
    </>
  );
};

export default Note;
