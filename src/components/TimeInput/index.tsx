import RNDateTimePicker from "@react-native-community/datetimepicker";
import { t } from "i18next";
import moment from "moment";
import React, { memo, useState } from "react";
import { Platform } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useTheme } from "styled-components";
import { ContentInput, IOSTimer } from "./styled";

export const TimeInput: React.FC<Props> = memo(
	({ label, value, onChangeValue }) => {
		const theme = useTheme();
		const [show, setShow] = useState(false);

		//@ts-ignore
		const onChange = (event, selectedDate) => {
			const currentDate = selectedDate;
			setShow(false);
			onChangeValue(currentDate);
		};

		return (
			<>
				{Platform.OS === "android" ? (
					<ContentInput onPress={() => setShow(true)}>
						<TextInput
							mode="outlined"
							style={{
								marginRight: 5,
								minWidth: 110,
							}}
							label={label}
							editable={false}
							value={moment(value).format("HH:mm")}
						/>
					</ContentInput>
				) : (
					<IOSTimer>
						<Text
							variant="labelSmall"
							style={{
								marginLeft: 10,
							}}
						>
							{label}
						</Text>
						<RNDateTimePicker
							mode="time"
							style={{
								marginTop: -3,
							}}
							value={value}
							onChange={onChange}
							themeVariant={theme.mode}
							accentColor={theme.colors.primary}
						/>
					</IOSTimer>
				)}
				{show && (
					//@ts-ignore
					<RNDateTimePicker
						mode="time"
						value={value}
						onChange={onChange}
						positiveButton={t("accept")}
						negativeButton={t("cancel")}
					/>
				)}
			</>
		);
	},
);

interface Props {
	label: string;
	value: any;
	onChangeValue: any;
}
