import { t } from "i18next";
import { useState } from "react";
import { Controller } from "react-hook-form";
import type {
	TextInputProps as DefaultProps,

} from "react-native-paper";
import {
	HelperText,
	TextInput,
} from "react-native-paper";
import styled, { useTheme } from "styled-components/native";
import { useUpdateEffect } from "../../hooks/useUpdateEffect";
import { KeyboardAccessory } from "../KeyboardAccessory";
import React from "react";

type InputProps = {
	name: string;
	control: any;
	rules?: object;
	watch: any;
};

type TextInputProps = InputProps & DefaultProps;

export const PhoneInput = (props: TextInputProps) => {
	const { control, watch, rules, name, ...otherProps } = props;

	const theme = useTheme();
	const inputAccessoryViewID = "uniqueID";

	const [phoneNumber, setPhoneNumber] = useState("");

	const formatPhoneNumber = (text: string) => {
		const cleanedText = text.replace(/\D/g, "");
		const formattedText = cleanedText.slice(0, 10);

		let formattedPhoneNumber = "";

		for (let i = 0; i < formattedText.length; i++) {
			if (i === 0) {
				formattedPhoneNumber = `(${formattedText[i]}`;
			} else if (i === 3) {
				formattedPhoneNumber += `) ${formattedText[i]}`;
			} else if (i === 6) {
				formattedPhoneNumber += `-${formattedText[i]}`;
			} else {
				formattedPhoneNumber += formattedText[i];
			}
		}

		setPhoneNumber(formattedPhoneNumber);
	};

	useUpdateEffect(() => {
		const formated = /^\(\d{3}\) \d{3}-\d{4}$/;
		if (
			watch(name) === "" &&
			formated.test(phoneNumber) &&
			phoneNumber.length >= 14
		) {
			setPhoneNumber("");
		}
	}, [watch(name)]);

	return (
		<Controller
			name={name}
			control={control}
			rules={rules}
			render={({ field: { onChange }, fieldState: { error } }) => {
				return (
					<Container>
						<KeyboardAccessory inputAccessoryViewID={inputAccessoryViewID} />
						<TextInput
							{...otherProps}
							label={t("phone-number")}
							value={phoneNumber}
							onChangeText={(text) => {
								formatPhoneNumber(text);
								onChange(text.replace(/\D/g, ""));
							}}
							keyboardType="phone-pad"
							maxLength={14}
							inputAccessoryViewID={inputAccessoryViewID}
							keyboardAppearance={theme.mode === "dark" ? "dark" : "light"}
							style={{ backgroundColor: theme.colors.background }}
							error={error ? true : false}
						/>
						{error && <HelperText type="error">{error.message}</HelperText>}
					</Container>
				);
			}}
		/>
	);
};

{
	/* <Container>
 
</Container> */
}

const Container = styled.View`
  width: 100%;
  margin-bottom: 5px;
`;
