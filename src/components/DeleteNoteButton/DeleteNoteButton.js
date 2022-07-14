import React from "react";
import { useNotes } from "../../hooks/useNotes";
import { StyledButton } from "../Styles/StyledButton";

const DeleteNoteButton = () => {
  const { activeNoteId, deleteNote } = useNotes();

  return (
    <StyledButton onClick={() => deleteNote(activeNoteId)}>
      Delete Note
    </StyledButton>
  );
};

export default DeleteNoteButton;
