import React from "react";
import { useNotes } from "../../hooks/useNotes";
import { StyledButton } from "../Styles/StyledButton";

const DeleteFolderButton = () => {
  const { deleteFolder, activeFolderId } = useNotes();

  return (
    <StyledButton onClick={() => deleteFolder(activeFolderId)}>
      Delete Folder
    </StyledButton>
  );
};

export default DeleteFolderButton;
