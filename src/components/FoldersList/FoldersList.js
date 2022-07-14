import React from "react";
import { useNotes } from "../../hooks/useNotes";
import { ListWrapper, ListItem } from "../Styles/StyledList";

const FoldersList = () => {
  const { folders, setActiveFolderId, activeFolderId, activeNoteInList } =
    useNotes();
  return (
    <ListWrapper>
      {folders.map((folder, index) => (
        <ListItem
          onClick={() => (
            setActiveFolderId(folder.id), activeNoteInList(folder.id)
          )}
          key={index + folder.title}
          selected={activeFolderId === folder.id}
        >
          {folder.title}
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default FoldersList;
