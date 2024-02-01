import { t } from "i18next";
import LottieView from "lottie-react-native";
import React from "react";
import { Text } from "react-native-paper";
import { Body, Content } from "./styled";

export const Empty: React.FC<Props> = ({
	isEmpty,
	emptyText,
	personalizedAnimation,
}) => {
	return (
		<Body>
			<Content>
				{isEmpty ? (
					<>
						<LottieView
							autoPlay
							style={{
								width: 500,
								height: 250,
								backgroundColor: "transparent",
							}}
							source={{
								uri: personalizedAnimation
									? personalizedAnimation
									: "https://lottie.host/cf48eb3e-7ebf-4f8d-9097-1ca28bdedf10/WYTItm3Fpr.json",
							}}
						/>
						<Text style={{ textAlign: "center" }}>{emptyText}</Text>
					</>
				) : (
					<Text variant="headlineSmall">{t("verity.no-found")}</Text>
				)}
			</Content>
		</Body>
	);
};

interface Props {
	isEmpty?: boolean;
	personalizedAnimation?: string;
	emptyText?: string;
}
