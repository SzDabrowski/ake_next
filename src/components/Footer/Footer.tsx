import styles from "./Footer.module.scss";

import { AkeLogo } from "../Icons/AkeLogo";

const Footer = () => {
	const scrollTo = (id: string) => {
		const element = document.getElementById(id) as HTMLDivElement;
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	return (
		<section className={styles.footer}>
			<div className={styles.grid}>
				<div className={styles.subsection}>
					<a
						className={styles.logo}
						href="#"
					>
						<AkeLogo />
					</a>

					<p className={styles.subtitle}>
						AKE <span className={styles.small}>Sp. z o. o.</span>
					</p>
					<span className={styles.item}>ul. Stanisława Hryniewieckiego 1</span>
					<span className={styles.item}>70-606 Szczecin</span>
					<span className={styles.item}>NIP: 9552569671</span>
					<span className={styles.item}>KRS: 0001015165</span>
					<span className={styles.item}>
						Sąd Rejonowy Szczecin-Centrum w Szczecinie XIII Wydział Gospodarczy
						Krajowego Rejestru Sądowego Kapitał zakładowy: 5.000 zł wpłacony w
						całości
					</span>
				</div>

				<div className={styles.subsection}>
					<p className={styles.subtitle}>Kontakt</p>
					<span className={`${styles.item} ${styles.name}`}>
						Zdzisław Mizia
					</span>
					<span className={styles.item}>
						<a href="tel:+48-780-776-724">+48 780 776 724</a>
					</span>
					<span className={`${styles.item} ${styles.name}`}>
						Grzegorz Cichecki
					</span>
					<span className={styles.item}>
						<a href="te:+48 519 055 815">+48 519 055 815</a>
					</span>
					<span className={`${styles.item} ${styles.name}`}>Email:</span>
					<span className={styles.item}>
						<a href="mailto:info@ake-zollex.pl">info@ake-zollex.pl</a>
					</span>
				</div>
				<div className={styles.subsection}>
					<p className={styles.subtitle}>Menu</p>
					<ul>
						<li className={styles.item}>
							<a onClick={() => scrollTo("about-us")}>O nas</a>
						</li>
						<li className={styles.item}>
							<a onClick={() => scrollTo("offer")}>Oferta</a>
						</li>
						<li className={styles.item}>
							<a onClick={() => scrollTo("contact")}>Kontakt</a>
						</li>
					</ul>
				</div>
			</div>

			<div className={styles.line}></div>

			<div className={styles.copyright}>Realizacja Szymon Dabrowski</div>
		</section>
	);
};
export default Footer;
