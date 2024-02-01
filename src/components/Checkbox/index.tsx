import React from "react";
import { Controller } from "react-hook-form";
import { Checkbox as DefaultCheckbox } from "react-native-paper";

export const Checkbox: React.FC<Props> = ({ control, name, label }) => {
	return (
		<>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value } }) => (
					<DefaultCheckbox.Item
						label={label}
						status={value ? "checked" : "unchecked"}
						mode="android"
						onPress={() => onChange(!value)}
						style={{ paddingHorizontal: 5 }}
					/>
				)}
			/>
		</>
	);
};

interface Props {
	control: any;
	name: string;
	label: string;
}
