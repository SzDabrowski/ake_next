import styles from "./AboutUsSection.module.scss";
import { Slide } from "react-awesome-reveal";

const AboutUsSection = () => {
	return (
		<section
			className={styles.aboutUs}
			id="about-us"
		>
			<div className={styles.proposition}>
				<Slide
					direction="left"
					triggerOnce
					cascade
				>
					<div className={styles.textContent}>
						<h3>
							Odkryj elastyczność pełnego zarządzania personelem, w tym płacami,
							umowami i wyposażeniem.
						</h3>

						<p>
							Nasze kompleksowe rozwiązania do zarządzania personelem zapewniają
							elastyczność pozwalającą skupić się na działalności, podczas gdy
							my zajmujemy się płacami, umowami i wyposażeniem pracownika.
						</p>

						<div className={styles.gridColumns}>
							<div>
								<span>Wynagrodzenia</span>
								<p>
									Zostaw nam kłopoty związane z zarządzaniem płacami i zapewnij
									sobie dokładne i terminowe płatności.
								</p>
							</div>
							<div>
								<span>Kontrakty</span>
								<p>
									Zajmujemy się wszystkimi zadaniami związanymi z umową,
									zapewniając zgodność i płynność działania.
								</p>
							</div>
						</div>
					</div>
				</Slide>

				<Slide
					direction="right"
					triggerOnce
				>
					<div className={styles.partnerImage}></div>
				</Slide>
			</div>
		</section>
	);
};

export default AboutUsSection;
