import { useEffect } from "react";
import { type UseOutsideClickProps } from "./useOutsideClick.types";

const useOutsideClick = ({
	isVisible,
	setIsVisible,
	refs,
}: UseOutsideClickProps) => {
	useEffect(() => {
		const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
			const target = event.target as Node;

			const isClickOutside = refs.every((ref) => {
				return ref.current && !ref.current.contains(target);
			});

			if (isVisible && isClickOutside) {
				setIsVisible(false);
			}
		};

		if (isVisible) {
			document.addEventListener("mousedown", handleOutsideClick);
			document.addEventListener("touchstart", handleOutsideClick);
		}

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
			document.removeEventListener("touchstart", handleOutsideClick);
		};
	}, [isVisible, refs, setIsVisible]);
};

export default useOutsideClick;
