import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	ThemePreference,
	setThemePreference,
} from "@vonovak/react-native-theme-control";
import { createContext, useEffect } from "react";
import React from "react";
import { PaperProvider } from "react-native-paper";
import Toast from "react-native-toast-message";
import { ThemeProvider as StyledProvider } from "styled-components/native";
import { paperLightTheme, styledLigthTheme } from "../constants/light";

export const ThemeContext = createContext(null);

type ThemeType = "dark" | "light" | "system";

export const ThemeProvider: React.FC<Props> = (props) => {
	useEffect(() => {
		(async () => {
			const currentThemeRaw: string | null =
				await AsyncStorage.getItem(THEME_KEY);

			const currentTheme: ThemePreference =
				currentThemeRaw !== null ? (currentThemeRaw as ThemeType) : "light";
			if (currentTheme === null) {
				await AsyncStorage.setItem(THEME_KEY, "light");
				setThemePreference("light");
			} else {
				setThemePreference(currentTheme);
			}
		})();
	}, []);

	return (
		<StyledProvider theme={styledLigthTheme}>
			<PaperProvider theme={paperLightTheme}>
				<ThemeContext.Provider value={null}>
					<Toast />
					{props.children}
				</ThemeContext.Provider>
			</PaperProvider>
		</StyledProvider>
	);
};

const THEME_KEY = "@theme";

interface Props {
	children: React.ReactNode;
}
