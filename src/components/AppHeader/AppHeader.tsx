import styles from "./AppHeader.module.scss";
import { AkeLogo } from "../Icons/AkeLogo";
import { useState } from "react";

interface NavLinkProps {
	text: string;
	id: string;
}

const AppHeader = () => {
	const [isOpen, setIsOpen] = useState(false);

	const NavLink = (props: NavLinkProps) => {
		//const ref = useRef(null);

		const scrollTo = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
			e.preventDefault();
			setIsOpen(!isOpen);
			document.body.classList.toggle("noScroll");
			setTimeout(function () {
				const element = document.getElementById(id) as HTMLDivElement;
				element.scrollIntoView({
					behavior: "smooth",
					//block: "start",
				});
			}, 220);
		};

		return (
			<li className={styles.navLink}>
				<a
					href="#"
					className="dropdown"
					onClick={(e) => scrollTo(props.id, e)}
				>
					<span>{props.text}</span>
				</a>
			</li>
		);
	};

	const handleHamburgerClick = () => {
		setIsOpen(!isOpen);
		document.body.classList.toggle("noScroll");
	};

	return (
		<header className={`${styles.header} ${isOpen ? styles.active : ""}`}>
			<a
				className={styles.logo}
				href="#"
			>
				<AkeLogo />
			</a>

			<div
				className={styles.hamburger}
				onClick={handleHamburgerClick}
			>
				<div className={styles.bar}></div>
			</div>

			<nav className={styles.nav}>
				<ul
					onClick={() => {
						isOpen ? handleHamburgerClick : "";
					}}
				>
					<NavLink
						text={"O nas"}
						id="about-us"
					/>
					<NavLink
						text={"Oferta"}
						id="offer"
					/>

					<NavLink
						text={"Kontakt"}
						id="contact"
					/>
				</ul>
			</nav>
		</header>
	);
};

export default AppHeader;
