import React from "react";
import { useState } from "react";
import { useNotes } from "../../hooks/useNotes";
import { StyledButton, StyledInput } from "../Styles/StyledButton";

const AddFolderButton = () => {
  const { addFolder } = useNotes();
  const [isAdding, setIsAdding] = useState(false);
  const [folderName, setFolderName] = useState("New Folder");

  const handleSave = (folderName) => {
    addFolder(folderName);
    setIsAdding(false);
    setFolderName("NewFolder");
  };

  return (
    <>
      <StyledButton
        onClick={() =>
          isAdding ? handleSave(folderName) : setIsAdding(!isAdding)
        }
      >
        {isAdding ? "Save" : "Add Folder"}
      </StyledButton>
      {isAdding && (
        <StyledInput
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
        />
      )}
    </>
  );
};

export default AddFolderButton;
