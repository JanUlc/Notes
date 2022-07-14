import styled from "styled-components";

export const SearchBarContainer = styled.div`
  font-family: "Baloo Da 2";
  position: relative;
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.brown};
  box-shadow: ${({ theme }) => theme.colors.brown} 4px 4px 0 0;
  background-color: #fbeee0;
  align-self: start;
`;

export const SearchedResult = styled.div`
  position: absolute;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.brown};
  width: 100%;
  top: 30px;
  cursor: pointer;
`;

export const SearchedResultItem = styled.div`
  text-align: center;
  border: 2px solid ${({ theme }) => theme.colors.brown};
  :hover {
    background: ${({ theme }) => theme.colors.brown};
    color: #fbeee0;
  }
`;

export const StyledInput = styled.input`
  font-family: "Baloo Da 2";
  font-size: 14px;
`;
