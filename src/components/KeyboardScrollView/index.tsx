import React from "react";
import { ScrollView } from "react-native";

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
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ flexGrow: 1, width: "100%" }}
			automaticallyAdjustKeyboardInsets
			{...otherProps}
		>
			{children}
		</ScrollView>
	);
};
