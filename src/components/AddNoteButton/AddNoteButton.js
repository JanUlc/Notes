import React from "react";
import { useNotes } from "../../hooks/useNotes";
import { StyledButton } from "../Styles/StyledButton";

const AddNoteButton = () => {
  const { addNote, activeFolderId } = useNotes();

  return (
    <StyledButton onClick={() => addNote(activeFolderId)}>
      Add Note
    </StyledButton>
  );
};

export default AddNoteButton;
