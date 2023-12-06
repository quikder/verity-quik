import { useEffect, useRef } from "react";

export function useFirstRender() {
	const isFirst = useRef<boolean>(true);

	if (isFirst.current) {
		isFirst.current = false;
		return true;
	}

	return isFirst.current;
}

export function useUpdateEffect(
	effect: () => void,
	deps: React.DependencyList,
) {
	const isFirstRender = useFirstRender();

	useEffect(() => {
		if (!isFirstRender) {
			return effect();
		}
	}, deps);
}
