import styles from "./BannerSection.module.scss";
import { Fade } from "react-awesome-reveal";

import { ContentSectionProps } from "../types";

const BannerSection = (props: ContentSectionProps) => {
	return (
		<section className={styles.banner}>
			<Fade
				direction={props.direction}
				triggerOnce
			>
				<h2>
					Odblokuj swój potencjał z AKE: Skoncentruj się na swoim biznesie, my
					zajmiemy się siłą roboczą
				</h2>

				<p>
					AKE Sp. z o.o. specjalizuje się w dostarczaniu rozwiązań w zakresie
					personelu tymczasowego dla branży TSL, budowlanej, produkcyjnej i
					sezonowej. Nasze elastyczne usługi obejmują pełne zarządzanie
					personelem, płacami, umowami, przeglądami i wyposażeniem, pozwalając
					naszym klientom skupić się na kluczowych aspektach swojej
					działalności.
				</p>
			</Fade>
		</section>
	);
};

export default BannerSection;
