import React, { createElement, useState } from "react";
import { useContext } from "react";

export const NotesContext = React.createContext({
  notes: [],
  folders: [],
  activeFolderId: "",
  activeNoteId: "",
});

const initialNotes = [
  {
    id: 1,
    folderId: 1,
    content: "qwerty",
    lastModified: 1655565860185,
  },
  {
    id: 2,
    folderId: 1,
    content: "asdfg",
    lastModified: 1655565860186,
  },
  {
    id: 3,
    folderId: 2,
    content: "zxcv",
    lastModified: 1655565860187,
  },
  {
    id: 4,
    folderId: 2,
    content: "qazwsx",
    lastModified: 1655565860188,
  },
];

const initialFolders = [
  {
    id: 1,
    title: "Notes",
  },
  {
    id: 2,
    title: "FirstFolder",
  },
];

const sortBy = (array, property, direction = "asc") => {
  const sortableArray = [...array];
  return direction === "asc"
    ? sortableArray.sort((a, b) => a[property] - b[property])
    : sortableArray.sort((a, b) => b[property] - a[property]);
};

const createSortBy =
  (property) =>
  (array, direction = "asc") => {
    const sortableArray = [...array];
    return direction === "asc"
      ? sortableArray.sort((a, b) => a[property] - b[property])
      : sortableArray.sort((a, b) => b[property] - a[property]);
  };

const sortByLastModified = createSortBy("lastModified");

const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(initialNotes);
  const [folders, setFolders] = useState(initialFolders);
  const [activeFolderId, setActiveFolderId] = useState(folders[0].id);
  const [activeNoteId, setActiveNoteId] = useState(
    notes.filter((notes) => activeFolderId === notes.folderId)[0]?.id
  );

  const activeNoteInList = (folderId) => {
    const notesByGroup = notes.filter((note) => note.folderId === folderId);
    const sortedNotes = sortByLastModified(notesByGroup);
    setActiveNoteId(sortedNotes[0]?.id);
  };

  const updateNote = (note) => {
    const notesWithoutEdited = notes.filter((note) => note.id !== activeNoteId);
    setNotes([...notesWithoutEdited, note]);
  };

  const addFolder = (folderName) => {
    const sortedFolders = sortBy(folders, "id");
    const newFolder = {
      id: sortedFolders[sortedFolders.length - 1].id + 1,
      title: folderName,
    };
    setFolders((oldFolders) => [newFolder, ...oldFolders]);
    setActiveFolderId(newFolder.id);
    addNote(newFolder.id);
  };

  const addNote = (folderId) => {
    const sortedNotes = sortBy(notes, "id");
    const newNote = {
      id: sortedNotes[sortedNotes.length - 1].id + 1,
      folderId: folderId,
      content: "",
      lastModified: Date.now(),
    };

    setNotes((oldNotes) => [newNote, ...oldNotes]);
    setActiveNoteId(newNote.id);
  };

  const deleteNote = (noteId) => {
    const notesWithoutDeleted = notes.filter((note) => note.id !== noteId);
    setNotes(notesWithoutDeleted);
    const notesByFolder = notesWithoutDeleted.filter(
      (note) => note.folderId === activeFolderId
    );
    notesByFolder[0]
      ? setActiveNoteId(notesByFolder[0].id)
      : addNote(activeFolderId);
  };

  const deleteFolder = (folderId) => {
    const notesFromOtherFolders = notes.filter(
      (note) => note.folderId !== folderId
    );
    setNotes(notesFromOtherFolders);
    const foldersWithoutDeletedFolder = folders.filter(
      (folder) => folder.id !== folderId
    );
    setFolders(foldersWithoutDeletedFolder);
    if (foldersWithoutDeletedFolder[0]) {
      setActiveFolderId(foldersWithoutDeletedFolder[0]?.id);
      const sortedNotes = sortBy(notesFromOtherFolders, "lastModified", "des");
      setActiveNoteId(
        sortedNotes.find(
          (note) => note.folderId === foldersWithoutDeletedFolder[0].id
        ).id
      );
      console.log(sortedNotes);
    } else addFolder("NewFolder");
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        folders,
        activeFolderId,
        activeNoteId,
        setActiveFolderId,
        setActiveNoteId,
        setNotes,
        updateNote,
        setFolders,
        addFolder,
        addNote,
        deleteNote,
        deleteFolder,
        activeNoteInList,
        sortBy,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const notes = useContext(NotesContext);
  return notes;
};

export default NotesProvider;
