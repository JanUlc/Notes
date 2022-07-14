import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: "Press Start 2P";
  margin-right: 0.5em;
  background-color: #fbeee0;
  border: 2px solid ${({ theme }) => theme.colors.brown};
  box-shadow: ${({ theme }) => theme.colors.brown} 4px 4px 0 0;
  color: ${({ theme }) => theme.colors.brown};
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 0.5em;
  line-height: 2em;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover {
    background-color: #fff;
  }

  :active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }

  @media (min-width: 768px) {
    min-width: 120px;
    padding: 0 25px;
  }
`;

export const StyledInput = styled.input`
  font-family: "Baloo Da 2";
  color: #fbeee0;
  background-color: ${({ theme }) => theme.colors.brown};
  border: 2px solid ${({ theme }) => theme.colors.brown};
`;
