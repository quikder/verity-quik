import { t } from "i18next";
import { InputAccessoryView, Keyboard, Platform, View } from "react-native";
import { Button } from "react-native-paper";
import { useTheme } from "styled-components/native";
import React from "react";

interface KeyboardAccessoryProps {
	inputAccessoryViewID: string;
}

export const KeyboardAccessory: React.FC<KeyboardAccessoryProps> = ({
	inputAccessoryViewID,
}) => {
	const theme = useTheme();

	return (
		<>
			{Platform.OS === "ios" && (
				<InputAccessoryView nativeID={inputAccessoryViewID}>
					<View
						style={{
							width: "100%",
							flexDirection: "row",
							justifyContent: "flex-end",
							paddingHorizontal: 16,
							paddingVertical: 2,
							backgroundColor: theme.colors.keyboard,
						}}
					>
						<Button onPress={() => Keyboard.dismiss()} textColor="#007AFF">
							{t("verity.done")}
						</Button>
					</View>
				</InputAccessoryView>
			)}
		</>
	);
};
