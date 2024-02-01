import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView } from "react-native";

type Props = {
	children: React.ReactNode;
	customOffset?: number;
};

type KeyboardProps = Props & ScrollView["props"];

export const KeyboardScrollView: React.FC<KeyboardProps> = ({
	children,
	customOffset = 80,
	...otherProps
}) => {
	return (
		<KeyboardAvoidingView
			style={{ flex: 1, width: "100%" }}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={Platform.OS === "ios" ? customOffset : 0}
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
