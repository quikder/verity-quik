import styled from "styled-components/native";

export const CodeInputContainer = styled.View`
	width: 300px;
	align-self: center;
  padding: 20px 0;
`;

export const CodeFieldRoot = styled.View`
  margin-left: auto;
  margin-right: auto;
`;

export const CellRoot = styled.View<{ $isFocused: string }>`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-bottom-color: ${({ $isFocused, theme }) =>
		$isFocused ? theme.colors.primary : "#ccc"};
  border-bottom-width: ${({ $isFocused }) => ($isFocused ? "2px" : "1px")};
`;

export const CellText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  text-align: center;
`;

export const CodeInputContainerWeb = styled.View`
  padding: 20px 0;
  align-self: center;
`;
