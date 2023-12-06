import React from "react";

import {
	CodeField,
	Cursor,
	useBlurOnFulfill,
	useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { useTheme } from "styled-components/native";
import {
	CellRoot,
	CellText,
	CodeFieldRoot,
	CodeInputContainer,
} from "./styled";
import type { CodeInputProps } from "./types";

export const CodeInput: React.FC<CodeInputProps> = ({
	lenght = 6,
	value,
	setValue,
}) => {
	const theme = useTheme().mode;
	const ref = useBlurOnFulfill({ value, cellCount: lenght });
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value,
		setValue,
	});

	return (
		<CodeInputContainer>
			<CodeField
				ref={ref}
				{...props}
				value={value}
				onChangeText={setValue}
				cellCount={lenght}
				//@ts-ignore
				rootStyle={CodeFieldRoot}
				keyboardType="number-pad"
				textContentType="oneTimeCode"
				keyboardAppearance={theme === "dark" ? "dark" : "light"}
				renderCell={({ index, symbol, isFocused }) => (
					<CellRoot
						onLayout={getCellOnLayoutHandler(index)}
						key={index}
						//@ts-ignore
						$isFocused={isFocused}
					>
						<CellText>{symbol || (isFocused ? <Cursor /> : null)}</CellText>
					</CellRoot>
				)}
			/>
		</CodeInputContainer>
	);
};
