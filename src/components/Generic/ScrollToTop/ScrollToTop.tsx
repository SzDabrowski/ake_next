import { useEffect, useState } from "react";
import { ScrollTopIcon } from "../../Icons/ScrollToTop";
import ScrollUpContainer from "./styled";
import { getScroll } from "../../utils/getWindows";

const ScrollToTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = (event: any) => {
		const offsetFromTop = getScroll(event.target, true);

		if (!showScroll && offsetFromTop > 350) {
			setShowScroll(true);
		} else if (offsetFromTop <= 350) {
			setShowScroll(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		return () => {
			window.removeEventListener("scroll", checkScrollTop);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const scrollUp = () => {
		const element = document.getElementById("hero") as HTMLDivElement;
		element.scrollIntoView({
			behavior: "smooth",
			block: "end",
			inline: "nearest",
		});
	};

	return (
		<ScrollUpContainer
			onClick={scrollUp}
			show={showScroll}
		>
			<ScrollTopIcon />
		</ScrollUpContainer>
	);
};

export default ScrollToTop;
