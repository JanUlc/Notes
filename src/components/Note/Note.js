import React, { useEffect, useState } from "react";
import { useNotes } from "../../hooks/useNotes";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Note = () => {
  const { notes, activeNoteId, updateNote } = useNotes();
  const noteToView = notes.find((note) => note.id === activeNoteId);
  const [editorState, setEditorState] = useState();
  const handleChangeText = (state) => {
    setEditorState(state);
    console.log("State:", state);
    updateNote({
      ...noteToView,
      content: state,
      lastModified: Date.now(),
    });
  };

  console.log("NoteToView: ", noteToView);
  useEffect(() => setEditorState(noteToView.content), [noteToView.content]);
  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={handleChangeText}
      />
    </div>
  );
};

export default Note;
