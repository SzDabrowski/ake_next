import { PropsWithChildren } from "react";

import styles from "./MainContainer.module.scss";

const MainContainer = (props: PropsWithChildren<{}>) => (
	<main className={styles.layout}>{props.children}</main>
);

export default MainContainer;
