import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

type Props = {
	children: React.ReactNode;
};

type KeyboardProps = Props & ScrollView["props"];

export const KeyboardScrollView: React.FC<KeyboardProps> = ({
	children,
	...otherProps
}) => {
	return (
		<KeyboardAvoidingView
			style={{ flex: 1, width: "100%" }}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
		>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ flexGrow: 1, width: "100%" }}
				{...otherProps}
			>
				{children}
			</ScrollView>
		</KeyboardAvoidingView>
	);
};
