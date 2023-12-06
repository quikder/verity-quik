import React from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DefaultToast from "react-native-toast-message";

export const ToastUi: React.FC<Props> = ({ isModal }) => {
	const { top } = useSafeAreaInsets();
	const topHeight = Platform.OS === "web" ? top + 10 : top;
	return <DefaultToast position="top" topOffset={isModal ? 5 : topHeight} />;
};

interface Props {
	isModal?: boolean;
}
