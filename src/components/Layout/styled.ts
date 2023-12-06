import styled from "styled-components/native";

export const Body = styled.View<{ $bottom: number; $top?: number }>`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0 16px;
  padding-top: ${({ $top }) => $top}px;
  padding-bottom: ${({ $bottom }) => `${$bottom}px`};
`;
