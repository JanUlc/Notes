import styled, { css, ThemeProvider } from "styled-components";
import FoldersList from "./components/FoldersList/FoldersList";
import NotesList from "./components/NotesList/NotesList";
import { theme } from "./utils/theme";
import Note from "./components/Note/Note";
import Menu from "./components/Menu/Menu";
import "./index.css";

const AppWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.bg};
  box-shadow: ${({ theme }) => theme.colors.brown} 4px 4px 0 0;
`;

const Column = styled.div`
  background: ${({ theme }) => theme.colors.lightBg};
  ${(props) =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}
`;

const AppRow = styled.div`
  display: flex;
  height: 70vh;
`;

const MenuRow = styled.div`
  display: flex;
  padding: 0.5em;
  justify-content: space-between;
  align-items: center;
`;

const CenteredContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #eacda3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #d6ae7b,
    #eacda3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #d6ae7b,
    #eacda3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

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
