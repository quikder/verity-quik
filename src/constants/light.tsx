import { MD3LightTheme } from "react-native-paper";
import type { DefaultTheme } from "styled-components/native";

export const colors = {
	primary: "#FFCD31",
	onPrimary: "#ffffff",
	primaryContainer: "#636263",
	onPrimaryContainer: "#241A00",
	secondary: "#4A90E2",
	onSecondary: "#ffffff",
	secondaryContainer: "#DCEBF8",
	onSecondaryContainer: "#1D3502",
	tertiary: "#8F8F8F",
	onTertiary: "#ffffff",
	tertiaryContainer: "#E0E0E0",
	onTertiaryContainer: "#04210B",
	success: "#43A047",
	onSuccess: "#ffffff",
	successContainer: "#D0E9C6",
	onSuccessContainer: "#093004",
	error: "#E53935",
	onError: "#ffffff",
	errorContainer: "#FFCDD2",
	onErrorContainer: "#800013",
	warning: "#FFA000",
	onWarning: "#ffffff",
	warningContainer: "#FFE082",
	onWarningContainer: "#804C00",
	info: "#1976D2",
	onInfo: "#ffffff",
	infoContainer: "#BBDEFB",
	onInfoContainer: "#003C8F",
	background: "#FFFFFF",
	onBackground: "#1E1B16",
	surface: "#FFFFFF",
	onSurface: "#1E1B16",
	surfaceVariant: "#FFFFFF",
	onSurfaceVariant: "#4C4639",
	outline: "#9E9E9E",
	outlineVariant: "#FFFFFF",
	shadow: "#000000",
	scrim: "#000000",
	inverseSurface: "#33302A",
	inverseOnSurface: "#F7F0E7",
	inversePrimary: "#F1C022",
	text: "#241A00",
	elevation: {
		level0: "transparent",
		level1: "#FFFFFF",
		level2: "#FFFFFF",
		level3: "#FFFFFF",
		level4: "#FFFFFF",
		level5: "#FFFFFF",
	},
	surfaceDisabled: "rgba(30, 27, 22, 0.12)",
	onSurfaceDisabled: "rgba(30, 27, 22, 0.38)",
	backdrop: "rgba(53, 48, 36, 0.4)",
	keyboard: "#d0d3da",
};

const styledLigthTheme: DefaultTheme = {
	borderRadius: "5px",
	mode: "light",
	colors,
};

export { styledLigthTheme };

export const paperLightTheme = {
	...MD3LightTheme,
	myOwnProperty: true,
	roundness: 4,
	colors,
};
