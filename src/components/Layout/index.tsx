import { DrawerToggleButton } from "@react-navigation/drawer";
import { useNavigation, useTheme } from "@react-navigation/native";
import Constants from "expo-constants";
import React from "react";
import { useWindowDimensions } from "react-native";
import { Appbar } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Body } from "./styled";

export const Layout: React.FC<Props> = ({
	children,
	useDrawer,
	title,
	back,
	where,
	action,
	action2,
	onPressAction,
	onPressAction2,
	customTop,
	actionPersonalized,
}) => {
	const { goBack, navigate } = useNavigation<any>();
	const { bottom } = useSafeAreaInsets();
	const { width } = useWindowDimensions();
	const isLargeScreen = width >= 768;
	const theme = useTheme();

	return (
		<Body
			$bottom={bottom}
			$top={customTop ? customTop : Constants.statusBarHeight + 5}
		>
			<Appbar.Header statusBarHeight={0} safeAreaInsets={{ left: 0, right: 0 }}>
				{back && (
					<Appbar.BackAction
						onPress={() => (where ? navigate(where) : goBack())}
					/>
				)}
				{useDrawer && !isLargeScreen && (
					<DrawerToggleButton tintColor={theme.colors.text} />
				)}
				<Appbar.Content title={title} />
				{action && <Appbar.Action icon={action} onPress={onPressAction} />}
				{action2 && <Appbar.Action icon={action2} onPress={onPressAction2} />}
				{actionPersonalized}
			</Appbar.Header>

			{children}
		</Body>
	);
};

interface Props {
	children: React.ReactNode;
	useDrawer?: boolean;
	title: string;
	back?: boolean;
	where?: string;
	action?: string;
	onPressAction?: () => void;
	action2?: string;
	onPressAction2?: () => void;
	customTop?: number;
	actionPersonalized?: React.ReactNode;
}
