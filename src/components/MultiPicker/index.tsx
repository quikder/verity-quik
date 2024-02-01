import React, { useState } from "react";
import { Controller } from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import { HelperText } from "react-native-paper";
import { useTheme } from "styled-components/native";
import { useUpdateEffect } from "../../hooks/useUpdateEffect";

export const MultiPicker: React.FC<Props> = ({
	items,
	name,
	placeholder,
	control,
	rules,
	watch,
	isSend,
	schema = { label: "label", value: "value" },
}) => {
	const [open, setOpen] = useState(false);
	const [defaultValue, setDefaultValue] = useState(watch(name));
	const theme = useTheme();

	useUpdateEffect(() => {
		if (isSend) {
			setDefaultValue([]);
		}
	}, [isSend]);

	return (
		<>
			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({ field: { onChange }, fieldState: { error: errorForm } }) => {
					return (
						<>
							<DropDownPicker
								listMode="SCROLLVIEW"
								schema={schema}
								multiple={true}
								mode="BADGE"
								showBadgeDot={false}
								placeholder={placeholder}
								open={open}
								value={defaultValue}
								items={items}
								setOpen={setOpen}
								setValue={setDefaultValue}
								onChangeValue={onChange}
								style={{
									borderWidth: 0,
									borderBottomWidth: errorForm ? 2 : 0.3,
									borderRadius: 0,
									borderBottomColor: errorForm
										? theme.colors.error
										: theme.colors.onSurfaceVariant,
									paddingLeft: 16,
								}}
								textStyle={{
									letterSpacing: 0.15,
									fontSize: 16,
									textTransform: "capitalize",
								}}
								placeholderStyle={{
									color: errorForm
										? theme.colors.error
										: theme.colors.onSurfaceVariant,
								}}
								dropDownContainerStyle={{
									borderColor: theme.colors.onSurfaceVariant,
									borderWidth: 0.3,
								}}
								badgeStyle={{
									borderRadius: 20,
								}}
								badgeColors={theme.colors.primary}
								badgeTextStyle={{ color: "#fff" }}
							/>

							{errorForm && (
								<HelperText
									type={errorForm ? "error" : "info"}
									style={{ marginTop: -7, marginBottom: -7 }}
								>
									{errorForm.message}
								</HelperText>
							)}
						</>
					);
				}}
			/>
		</>
	);
};

interface Props {
	items: ItemType[];
	placeholder: string;
	name: string;
	control: any;
	rules?: object;
	schema?: ItemType;
	watch: any;
	isSend?: boolean;
}

interface ItemType {
	label: string;
	value: string;
}
