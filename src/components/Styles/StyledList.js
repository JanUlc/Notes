import styled, { css } from "styled-components";

export const ListWrapper = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  overflow-y: scroll;
  height: 100%;
`;

export const ListItem = styled.li`
  background-color: #fff;
  border: 2px solid ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.brown};
  cursor: pointer;
  padding: 0.5em 0.5em 0.5em 0.5em;
  font-weight: bold;
  :hover {
    background: ${({ theme }) => theme.colors.brown};
    color: #fbeee0;
  }
  ${(props) =>
    props.selected &&
    css`
      background: ${props.theme.colors.activeBg};
    `}
`;

export const ListItemDate = styled.p`
  margin: 0;
  font-size: 12px;
`;
