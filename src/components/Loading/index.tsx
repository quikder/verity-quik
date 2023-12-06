import { memo } from "react";
import { ActivityIndicator, Platform } from "react-native";
import { useTheme } from "styled-components/native";
import { Body } from "./styled";
import React from 'react';

export const Loading = memo(() => {
	const color =
		Platform.OS === "android" ? useTheme().colors.primary : "#999999";

	return (
		<Body>
			<ActivityIndicator size="large" color={color} />
		</Body>
	);
});
