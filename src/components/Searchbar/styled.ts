import { Searchbar as DefaultSearchbar } from "react-native-paper";
import styled from "styled-components/native";
import { useWidth } from "../../hooks/useWidth";

export const Bar = styled.View<{ $width: number }>`
  width: ${({ $width }) =>
		useWidth($width, "100%", "100%", "100%", "50%", "40%")};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SearchBar = styled(DefaultSearchbar)<{
	$needFilter: boolean;
	$width: number;
}>`
  width: ${({ $needFilter, $width }) =>
		$needFilter ? useWidth($width, "85%", "85%", "85%", "85%", "89%") : "100%"};
`;
