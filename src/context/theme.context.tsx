import { createContext } from 'react';
import { PaperProvider } from "react-native-paper";
import Toast from "react-native-toast-message";
import { ThemeProvider as StyledProvider } from "styled-components/native";
import { paperLightTheme, styledLigthTheme } from "../constants/light";
import React from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider: React.FC<Props> = (props) => {
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
}

interface Props{
	children: React.ReactNode
}
