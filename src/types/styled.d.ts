import "styled-components/native";

declare module "styled-components/native" {
	export interface DefaultTheme {
		borderRadius: string;
		mode: "light" | "dark";
		colors: {
			primary: string;
			onPrimary: string;
			primaryContainer: string;
			onPrimaryContainer: string;
			secondary: string;
			onSecondary: string;
			secondaryContainer: string;
			onSecondaryContainer: string;
			tertiary: string;
			onTertiary: string;
			tertiaryContainer: string;
			onTertiaryContainer: string;
			success: string;
			onSuccess: string;
			successContainer: string;
			onSuccessContainer: string;
			error: string;
			onError: string;
			errorContainer: string;
			onErrorContainer: string;
			warning: string;
			onWarning: string;
			warningContainer: string;
			onWarningContainer: string;
			info: string;
			onInfo: string;
			infoContainer: string;
			onInfoContainer: string;
			background: string;
			onBackground: string;
			surface: string;
			onSurface: string;
			surfaceVariant: string;
			onSurfaceVariant: string;
			outline: string;
			outlineVariant: string;
			shadow: string;
			scrim: string;
			inverseSurface: string;
			inverseOnSurface: string;
			inversePrimary: string;
			text: string;
			elevation: {
				level0: string;
				level1: string;
				level2: string;
				level3: string;
				level4: string;
				level5: string;
			};
			surfaceDisabled: string;
			onSurfaceDisabled: string;
			backdrop: string;
			keyboard: string;
		};
	}
}
