import React, { useState } from "react";
import type { TextInputProps as DefaultProps, } from "react-native-paper";
import {
	TextInput as DefaultInput,
	HelperText,
} from "react-native-paper";
import { useTheme } from "styled-components/native";
import { KeyboardAccessory } from "../KeyboardAccessory";
import { Row } from "../TextInput/styled";

export const TextInputBase = (props: TextInputProps) => {
	const {
		leftIcon,
		isPassword,
		useKeyboardAccesory,
		helperText,
		...otherProps
	} = props;
	const theme = useTheme();

	const [secureText, setSecureText] = useState(isPassword ? true : false);
	const inputAccessoryViewID = "uniqueID";

	return (
		<Row>
			<DefaultInput
				{...otherProps}
				style={{ backgroundColor: theme.colors.background }}
				keyboardAppearance={theme.mode === "dark" ? "dark" : "light"}
				secureTextEntry={secureText}
				left={
					leftIcon ? (
						<DefaultInput.Icon
							icon={leftIcon}
							color={props.error ? theme.colors.error : ""}
						/>
					) : (
						props.left
					)
				}
				right={
					isPassword ? (
						<DefaultInput.Icon
							icon={secureText ? "eye" : "eye-off"}
							onPress={() => setSecureText(!secureText)}
							forceTextInputFocus={false}
						/>
					) : (
						// right
						<></>
					)
				}
				inputAccessoryViewID={useKeyboardAccesory ? inputAccessoryViewID : ""}
			/>

			{useKeyboardAccesory && (
				<KeyboardAccessory inputAccessoryViewID={inputAccessoryViewID} />
			)}

			{helperText && (
				<HelperText
					type={props.error ? "error" : "info"}
					style={{ marginTop: -7, marginBottom: -10 }}
				>
					{helperText}
				</HelperText>
			)}
		</Row>
	);
};

interface InputProps {
	leftIcon?: string;
	isPassword?: boolean;
	useKeyboardAccesory?: boolean;
	helperText?: string;
}

type TextInputProps = InputProps & DefaultProps;
