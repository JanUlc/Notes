import React, { useState } from "react";
import { useNotes } from "../../hooks/useNotes";
import { createTitle } from "../../utils/createTitle";
import { getReadableContent } from "../../utils/getReadableContent";
import {
  SearchBarContainer,
  SearchedResult,
  SearchedResultItem,
  StyledInput,
} from "./SearchBar.styles";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { notes, setActiveFolderId, setActiveNoteId } = useNotes();

  const searchedNotes =
    query.length === 0
      ? []
      : notes.filter((note) =>
          getReadableContent(note.content).includes(query)
        );

  const selectNote = (noteId, folderId) => {
    setActiveFolderId(folderId);
    setActiveNoteId(noteId);
    setQuery("");
  };
  return (
    <SearchBarContainer>
      <StyledInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
      />
      <SearchedResult>
        {searchedNotes.map((note, index) => (
          <SearchedResultItem
            key={index + "note"}
            onClick={() => selectNote(note.id, note.folderId)}
          >
            {createTitle(note.content, 5)}{" "}
          </SearchedResultItem>
        ))}
      </SearchedResult>
    </SearchBarContainer>
  );
};

export default SearchBar;
