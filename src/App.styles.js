import styled, { css } from "styled-components";

export const AppWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.bg};
  box-shadow: ${({ theme }) => theme.colors.brown} 4px 4px 0 0;
`;

export const Column = styled.div`
  background: ${({ theme }) => theme.colors.lightBg};
  ${(props) =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}
`;

export const AppRow = styled.div`
  display: flex;
  height: 70vh;
`;

export const MenuRow = styled.div`
  display: flex;
  padding: 0.5em;
  justify-content: space-between;
  align-items: center;
`;

export const CenteredContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #eacda3;
  background: -webkit-linear-gradient(to left, #d6ae7b, #eacda3);
  background: linear-gradient(to left, #d6ae7b, #eacda3);
`;
