import React, { useState } from "react";
import { Controller } from "react-hook-form";
import {
	HelperText,
	TextInput as DefaultInput,

} from "react-native-paper";
import type { TextInputProps as DefaultProps, } from "react-native-paper";
import { useTheme } from "styled-components/native";
import { KeyboardAccessory } from "../KeyboardAccessory";
import { Row } from "./styled";

export const TextInput = (props: TextInputProps) => {
	const {
		leftIcon,
		isPassword,
		useKeyboardAccesory,
		helperText,
		name,
		control,
		rules,
		...otherProps
	} = props;
	const theme = useTheme();

	const [secureText, setSecureText] = useState(isPassword ? true : false);
	const inputAccessoryViewID = "uniqueID";

	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({
				field: { onChange, value },
				fieldState: { error: errorForm },
			}) => (
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
									color={
										props.error
											? theme.colors.error
											: errorForm
												? theme.colors.error
												: ""
									}
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
									color={
										props.error
											? theme.colors.error
											: errorForm
												? theme.colors.error
												: ""
									}
								/>
							) : (
								props.right
							)
						}
						inputAccessoryViewID={
							useKeyboardAccesory ? inputAccessoryViewID : ""
						}
						onChangeText={onChange}
						value={`${value}`}
						error={errorForm ? true : props.error}
						autoCorrect={isPassword ? false : props.autoCorrect}
						spellCheck={isPassword ? false : props.spellCheck}
					/>

					{useKeyboardAccesory && (
						<KeyboardAccessory inputAccessoryViewID={inputAccessoryViewID} />
					)}

					{errorForm ? (
						<HelperText
							type={errorForm ? "error" : props.error ? "error" : "info"}
							style={{ marginTop: -7, marginBottom: -10 }}
						>
							{errorForm.message}
						</HelperText>
					) : (
						helperText && (
							<HelperText
								type={errorForm ? "error" : props.error ? "error" : "info"}
								style={{ marginTop: -7, marginBottom: -10 }}
							>
								{helperText}
							</HelperText>
						)
					)}
				</Row>
			)}
		/>
	);
};

interface InputProps {
	leftIcon?: string;
	isPassword?: boolean;
	useKeyboardAccesory?: boolean;
	helperText?: string;
	name: string;
	control: any;
	rules?: object;
}

type TextInputProps = InputProps & DefaultProps;
