import React from "react";
import AddFolderButton from "../AddFolderButton/AddFolderButton";
import AddNoteButton from "../AddNoteButton/AddNoteButton";
import DeleteFolderButton from "../DeleteFolderButton.js/DeleteFolderButton";
import DeleteNoteButton from "../DeleteNoteButton/DeleteNoteButton";
import SearchBar from "../SearchBar/SearchBar";
import { MenuContainer, ButtonsWrapper } from "../Styles/StyledMenu";

const Menu = () => {
  return (
    <MenuContainer>
      <ButtonsWrapper>
        <AddFolderButton />
        <DeleteFolderButton />
        <AddNoteButton />
        <DeleteNoteButton />
      </ButtonsWrapper>
      <SearchBar />
    </MenuContainer>
  );
};

export default Menu;
