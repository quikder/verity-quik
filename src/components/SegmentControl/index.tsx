import React, { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import {
	Button,
	CanvasContainer,
	Container,
	ControlContainer,
	LabelText,
	SelectedIndicator,
	TouchableButton,
} from "./styled";

interface SegmentControlProps {
	segments: string[];
	onChange: (index: number) => void;
	value: number;
}

export type SegmentProps = SegmentControlProps & View["props"];

export const SegmentControl: React.FC<SegmentProps> = (props) => {
	const { segments, onChange, value, ...otherProps } = props;

	const newValue = value ? value : 0;

	const containerProps = otherProps;

	const [buttonWidth, setButtonWidth] = useState(0);
	const activeIndex = useRef(new Animated.Value(newValue)).current;
	const selectedIndicatorPosition = useRef(
		new Animated.Value(newValue * buttonWidth),
	).current;
	const segmentWidth = 100 / segments.length;

	useEffect(() => {
		Animated.parallel([
			Animated.timing(activeIndex, {
				toValue: newValue,
				duration: 300,
				useNativeDriver: false,
			}),
			Animated.timing(selectedIndicatorPosition, {
				toValue: newValue * buttonWidth,
				duration: 300,
				useNativeDriver: false,
			}),
		]).start();
	}, [newValue]);

	const translateX = selectedIndicatorPosition;

	const handlePress = (index: number) => {
		onChange(index);
	};

	return (
		<Container>
			<ControlContainer {...containerProps}>
				<CanvasContainer>
					<SelectedIndicator
						$width={segmentWidth}
						style={{ transform: [{ translateX }] }}
					/>
				</CanvasContainer>

				{segments.map((segment, index) => (
					<TouchableButton
						key={`${index}`}
						onPress={() => handlePress(index)}
						$width={segmentWidth}
						onLayout={(event) => setButtonWidth(event.nativeEvent.layout.width)}
					>
						<Button>
							<LabelText $isActive={newValue === index} numberOfLines={1}>
								{segment}
							</LabelText>
						</Button>
					</TouchableButton>
				))}
			</ControlContainer>
		</Container>
	);
};
