import NetInfo from "@react-native-community/netinfo";
import { t } from "i18next";
import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native-paper";
import { useTheme } from "styled-components/native";
import { Body } from "./styled";

export const ErrorServer: React.FC<ErrorServerType> = ({ error, refetch }) => {
	const [isConnected, setIsConnected] = useState<boolean | null>(null);
	const theme = useTheme();

	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener((state) => {
			setIsConnected(state.isConnected);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<Body>
			<LottieView
				autoPlay
				loop
				style={{
					width: 300,
					height: 300,
					backgroundColor: "transparent",
				}}
				source={{
					uri: isConnected
						? "https://lottie.host/bbe22faa-0553-4c1d-b437-674a4a8a289b/HGWoKJJzp6.json"
						: "https://lottie.host/6d774efb-9c4e-4ce3-a567-29b2c08d3ea8/FmF5oKQfU1.json",
				}}
			/>
			<Text variant="headlineLarge" style={{ color: theme.colors.error }}>
				Error {error.message.substring(error.message.length - 3)}
			</Text>

			<Button style={{ marginTop: 20 }} onPress={() => refetch()}>
				{t("update")}
			</Button>
		</Body>
	);
};

export interface ErrorServerType {
	error: ErrorType;
	refetch: () => void;
}

interface ErrorType {
	message: string;
}
