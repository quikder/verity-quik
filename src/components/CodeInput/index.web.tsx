import React from "react";

import AuthCode from "react-auth-code-input";
import "./index.css";
import { CodeInputContainerWeb } from "./styled";
import type { CodeInputProps } from "./types";

export const CodeInput: React.FC<CodeInputProps> = ({
	lenght = 6,
	setValue,
}) => {
	const handleOnChange = (res: string) => {
		setValue(res);
	};

	return (
		<CodeInputContainerWeb>
			<AuthCode
				length={lenght}
				allowedCharacters="numeric"
				onChange={handleOnChange}
				inputClassName="input"
			/>
		</CodeInputContainerWeb>
	);
};
