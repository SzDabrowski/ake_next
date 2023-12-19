import styles from "./HeroSection.module.scss";
import Button from "../Generic/Button/Button";

import { Fade } from "react-awesome-reveal";
import { ContentSectionProps } from "../types";

const HeroSection = (props: ContentSectionProps) => {
	const scrollTo = () => {
		const element = document.getElementById("about-us") as HTMLDivElement;
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<section
			className={styles.hero}
			id="hero"
		>
			<Fade
				direction={props.direction}
				triggerOnce
				cascade
			>
				<div className={styles.textContent}>
					<h1>
						Innowacyjne rozwiązania w zakresie pracowników dla Twojej firmy
					</h1>

					<Button
						text="Dowiedz się więcej!"
						action={scrollTo}
					/>
				</div>
			</Fade>
		</section>
	);
};

export default HeroSection;
