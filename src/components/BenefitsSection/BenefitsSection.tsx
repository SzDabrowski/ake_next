import styles from "./BenefitsSection.module.scss";
import { Fade } from "react-awesome-reveal";

import { RectangleIcon } from "../Icons/RectangleIcon";

const BenefitsSection = () => {
	return (
		<section
			className={styles.benefits}
			id="offer"
		>
			<Fade
				direction="down"
				fraction={1}
				triggerOnce
			>
				<span>Dopasowanie</span>
				<h4>
					Kompleksowe rozwiązania kadrowe odpowiadające zróżnicowanym potrzebom
					rynku
				</h4>
				<p>
					W AKE Sp. z oo z oo oferujemy kompleksowe rozwiązania kadrowe,
					dostosowane do różnorodnych potrzeb rynku. Nasze usługi obejmują pełne
					zarządzanie kadrami, płacami, kontraktami, badaniami i wyposarzeniem,
					pozwalając naszym klientom na swobodę skupienia się na kluczowych
					aspektach ich działalności.
				</p>

				<div className={styles.columns}>
					<div className={styles.textBlock}>
						<RectangleIcon />
						<span>Elastyczne rozwiązania kadrowe</span>
						<p>
							Nasze elastyczne rozwiązania kadrowe zostały zaprojektowane tak,
							aby sprostać stale zmieniającym się wymaganiom rynku.
						</p>
					</div>

					<div className={styles.textBlock}>
						<RectangleIcon />
						<span>Efektywne zarządzanie personelem</span>
						<p>
							Dostarczamy skuteczne rozwiązania do zarządzania personelem,
							optymalizujące produktywność i wydajność.
						</p>
					</div>

					<div className={styles.textBlock}>
						<RectangleIcon />
						<span>Indywidualne rozwiązania</span>
						<p>
							Nasze rozwiązania są dostosowane do unikalnych wymagań Twojej
							firmy.
						</p>
					</div>
				</div>
			</Fade>
		</section>
	);
};

export default BenefitsSection;
