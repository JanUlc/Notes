import { ThemeProvider } from "styled-components";
import FoldersList from "./components/FoldersList/FoldersList";
import NotesList from "./components/NotesList/NotesList";
import { theme } from "./utils/theme";
import Note from "./components/Note/Note";
import Menu from "./components/Menu/Menu";
import "./index.css";
import {
  AppWrapper,
  Column,
  AppRow,
  MenuRow,
  CenteredContainer,
} from "./App.styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CenteredContainer>
        <AppWrapper>
          <MenuRow>
            <Menu />
          </MenuRow>
          <AppRow>
            <Column flex="0 1 150px">
              <FoldersList></FoldersList>
            </Column>
            <Column flex="0 1 150px">
              <NotesList></NotesList>
            </Column>
            <Column flex="1">
              <Note></Note>
            </Column>
          </AppRow>
        </AppWrapper>
      </CenteredContainer>
    </ThemeProvider>
  );
}

export default App;
