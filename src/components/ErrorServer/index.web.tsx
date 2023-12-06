import NetInfo from "@react-native-community/netinfo";
import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { Button, Text } from "react-native-paper";
import { useTheme } from "styled-components/native";
import { Body } from "./styled";
import type { ErrorServerType } from "./types";

export const ErrorServer: React.FC<ErrorServerType> = ({ refetch }) => {
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
			<iframe
				title="animation"
				src={
					isConnected
						? "https://lottie.host/?file=bbe22faa-0553-4c1d-b437-674a4a8a289b/HGWoKJJzp6.json"
						: "https://lottie.host/?file=6d774efb-9c4e-4ce3-a567-29b2c08d3ea8/FmF5oKQfU1.json"
				}
				style={{ borderWidth: 0 }}
			/>

			{isConnected && (
				<>
					<Text variant="headlineLarge" style={{ color: theme.colors.error }}>
						Error 502
					</Text>

					<Button style={{ marginTop: 20 }} onPress={() => refetch()}>
						{t("update")}
					</Button>
				</>
			)}
		</Body>
	);
};
