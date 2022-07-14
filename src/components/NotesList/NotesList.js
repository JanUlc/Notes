import React from "react";
import { useNotes } from "../../hooks/useNotes";
import { createTitle } from "../../utils/createTitle";
import { ListWrapper, ListItem, ListItemDate } from "../Styles/StyledList";

const NotesList = () => {
  const { notes, setActiveNoteId, activeFolderId, activeNoteId, sortBy } =
    useNotes();
  const notesFromFolder = notes.filter(
    (note) => note.folderId === activeFolderId
  );
  const sortedNotes = sortBy(notesFromFolder, "lastModified");
  return (
    <ListWrapper>
      {sortedNotes.map((note, index) => (
        <ListItem
          onClick={() => setActiveNoteId(note.id)}
          key={index + "note"}
          selected={activeNoteId === note.id}
        >
          {createTitle(note.content, 5)}
          <ListItemDate>
            {new Date(note.lastModified).toLocaleDateString()}
          </ListItemDate>
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default NotesList;
