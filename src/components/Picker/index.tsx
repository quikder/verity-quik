import React, { useState } from "react";
import { Controller } from "react-hook-form";
import DropDownPicker from "react-native-dropdown-picker";
import { HelperText, useTheme } from "react-native-paper";
import { useUpdateEffect } from "../../hooks/useUpdateEffect";

export const Picker: React.FC<Props> = ({
	items,
	placeholder,
	name,
	control,
	rules,
	isSend,
	valueDefault = null,
	schema = { label: "label", value: "value" },
}) => {
	const [open, setOpen] = useState<boolean>(false);
	const [defaultValue, setDefaultValue] = useState<string | null>(valueDefault);
	const theme = useTheme();

	useUpdateEffect(() => {
		if (isSend) {
			setDefaultValue(null);
		}
	}, [isSend]);

	const totalOptions = items.length;

	return (
		<>
			<Controller
				name={name}
				control={control}
				rules={rules}
				render={({
					field: { value, onChange },
					fieldState: { error: errorForm },
				}) => {
					return (
						<>
							<DropDownPicker
								listMode="SCROLLVIEW"
								schema={schema}
								placeholder={placeholder}
								open={open}
								items={items}
								value={defaultValue}
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
									height: totalOptions < 6 ? totalOptions * 40 : 160,
								}}
								listItemLabelStyle={{ textTransform: "capitalize" }}
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
	valueDefault?: string | null;
	isSend?: boolean;
}

interface ItemType {
	label: string;
	value: string;
}
