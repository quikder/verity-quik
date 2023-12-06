import { Animated } from "react-native";
import { Text } from "react-native-paper";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
`;

export const ControlContainer = styled.View`
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  border-radius: 50px;
  flex-direction: row;
  overflow: hidden;
`;

export const CanvasContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 40px;
`;

export const SelectedIndicator = styled(Animated.View)<StyledProps>`
  height: 40px;
  width: ${({ $width }) => `${$width}%`};
  border-radius: 99px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export interface StyledProps {
	$width: number;
}

export const TouchableButton = styled.TouchableOpacity<StyledProps>`
  width: ${({ $width }) => `${$width}%`};
  height: 40px;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
`;

export const Button = styled.View`
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

interface LabelProps {
	$isActive: boolean;
}

export const LabelText = styled(Text)<LabelProps>`
  font-size: 16px;
  color: ${({ $isActive, theme }) =>
		$isActive ? "#ffffff" : theme.colors.primary};
  text-align: center;
  text-transform: capitalize;
`;
