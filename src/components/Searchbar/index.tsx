import React from "react";
import { useWindowDimensions } from "react-native";
import { IconButton, Surface } from "react-native-paper";
import { useTheme } from "styled-components/native";
import { KeyboardAccessory } from "../KeyboardAccessory";
import { Bar, SearchBar } from "./styled";

interface SearchProps {
	searchQuery: string;
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
	placeholder?: string;
	needFilter?: boolean;
	onPressFilter?: () => void;
}

export const Searchbar: React.FC<SearchProps> = ({
	searchQuery,
	setSearchQuery,
	placeholder,
	needFilter = false,
	onPressFilter,
}) => {
	const { width } = useWindowDimensions();
	const theme = useTheme().colors;
	const inputAccessoryViewID = "uniqueID";

	const onChangeSearch = (query: string) => setSearchQuery(query);

	return (
		//@ts-ignore
		<Bar $width={width}>
			<SearchBar
				$width={width}
				placeholder={placeholder}
				onChangeText={onChangeSearch}
				value={searchQuery}
				inputAccessoryViewID={inputAccessoryViewID}
				autoCorrect={false}
				spellCheck={false}
				$needFilter={needFilter}
				elevation={1}
			/>
			<KeyboardAccessory inputAccessoryViewID={inputAccessoryViewID} />

			{needFilter && (
				<Surface elevation={1} style={{ borderRadius: 999 }}>
					<IconButton
						icon="filter"
						mode="contained"
						size={30}
						iconColor={theme.primaryContainer}
						onPress={onPressFilter}
						style={{ margin: 0 }}
					/>
				</Surface>
			)}
		</Bar>
	);
};
