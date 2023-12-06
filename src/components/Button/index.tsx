import NetInfo from "@react-native-community/netinfo";
import React, { useEffect, useState } from "react";
import type {
	ButtonProps as DefaultButtonProps,
} from "react-native-paper";

import {
	Button as DefaultButton,
} from "react-native-paper";

export const Button = (props: ButtonProps) => {
	const { children, mode = "contained", ...otherProps } = props;
	const [isConnected, setIsConnected] = useState<boolean | null>(null);

	useEffect(() => {
		const unsubscribe = NetInfo.addEventListener((state: any) => {
			setIsConnected(state.isConnected);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const isDisabled = props.disabled ? true : isConnected ? false : true;

	return (
		<DefaultButton
			{...otherProps}
			mode={mode}
			disabled={isDisabled || props.loading}
		>
			{children}
		</DefaultButton>
	);
};

type ChildrenType = {
	children: React.ReactNode;
};

type ButtonProps = ChildrenType & DefaultButtonProps;
