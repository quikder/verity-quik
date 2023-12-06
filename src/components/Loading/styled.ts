import styled from "styled-components/native";

export const Body = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;
